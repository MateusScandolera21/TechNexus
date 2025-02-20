import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginSenha, setLoginSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  // Função para fazer login
  const fazerLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email: loginEmail,
        senha: loginSenha,
      });
      setMensagem(`Login bem-sucedido: ${response.data.usuario.email}`);
      navigate('/dashboard'); // Redireciona para a página de dashboard (ou outra página)
    } catch (error) {
      if (error.response && error.response.data.message) {
        setMensagem(error.response.data.message); // Exibe a mensagem de erro do backend
      } else {
        setMensagem('Erro ao fazer login');
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Login</h1>

      <div>
        <input
          type="email"
          placeholder="Email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={loginSenha}
          onChange={(e) => setLoginSenha(e.target.value)}
        />
        <button onClick={fazerLogin}>Login</button>
      </div>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default Login;
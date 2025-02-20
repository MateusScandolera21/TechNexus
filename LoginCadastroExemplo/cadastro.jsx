import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [cadastroEmail, setCadastroEmail] = useState('');
  const [cadastroSenha, setCadastroSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  // Função para validar o email
  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Função para validar a senha
  const validarSenha = (senha) => {
    return senha.length >= 8 && senha.length <= 16;
  };

  // Função para cadastrar um usuário
  const cadastrarUsuario = async () => {
    // Validação dos campos obrigatórios
    if (!cadastroEmail || !cadastroSenha || !confirmarSenha) {
      setMensagem('Preencha todos os campos');
      return;
    }

    // Validação do formato do email
    if (!validarEmail(cadastroEmail)) {
      setMensagem('O email deve ter o formato "usuario@exemplo.com"');
      return;
    }

    // Validação da senha
    if (!validarSenha(cadastroSenha)) {
      setMensagem('A senha deve ter entre 8 e 16 caracteres');
      return;
    }

    // Validação da confirmação de senha
    if (cadastroSenha !== confirmarSenha) {
      setMensagem('As senhas não coincidem');
      return;
    }

    // Envia os dados para o backend
    try {
      const response = await axios.post('http://localhost:5000/api/usuarios', {
        email: cadastroEmail,
        senha: cadastroSenha,
        confirmarSenha: confirmarSenha,
      });
      setMensagem(`Usuário cadastrado com sucesso: ${response.data.usuario.email}`);
      navigate('/login'); // Redireciona para a página de login
    } catch (error) {
      if (error.response && error.response.data.message) {
        setMensagem(error.response.data.message); // Exibe a mensagem de erro do backend
      } else {
        setMensagem('Erro ao cadastrar usuário');
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cadastro de Usuário</h1>

      <div>
        <input
          type="email"
          placeholder="Email"
          value={cadastroEmail}
          onChange={(e) => setCadastroEmail(e.target.value)}
          style={{ border: validarSenha(cadastroSenha) ? '1px solid green' : '1px solid red' }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={cadastroSenha}
          onChange={(e) => setCadastroSenha(e.target.value)}
          style={{ border: validarSenha(cadastroSenha) ? '1px solid green' : '1px solid red' }}
        />
        <input
          type="password"
          placeholder="Confirmar Senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          style={{ border: validarSenha(cadastroSenha) ? '1px solid green' : '1px solid red' }}
        />
        <button onClick={cadastrarUsuario}>Cadastrar</button>
      </div>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default Cadastro;
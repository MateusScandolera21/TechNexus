import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import * as S from './LoginStyles';
import axios from 'axios';

import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import Sidebar from '../../Components/Sidebar/Sidebar';

import { BsEnvelope, BsLock, BsChevronBarLeft } from "react-icons/bs";

const Login = () => {
    const [ loginEmail, setLoginEmail ] = useState('');
    const [ loginSenha, setLoginSenha ] = useState('');
    const [ mensagem, setMensagem] = useState('');
    const navigate = useNavigate();
  
    //Função para fazer login
    const fazerLogin = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/login', {
          email: loginEmail,
          senha: loginSenha,
        });
        
        setMensagem('Login bem-sucedido: ${response.data.usuario.email}');
        navigate('/dashboard');//Redireciona para a pagina de dashboard
      } catch (error) {
        if (error.response && error.response.data.message){
          setMensagem(error.response.data.mesage); //exibe a mensagem de erro do backend
        } else {
          setMensagem('Erro ao fazer login');
        }
      }
    };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 

  return (
    <S.LoginContainer>
      
      <Sidebar showSteps={false} forceTopBar={false}/>

      <S.ContentWrapper>
        <S.HeaderContainer>

          <S.TopLeftLogin to="/">
            <BsChevronBarLeft size={20} /> Página Inicial
          </S.TopLeftLogin>

          <S.SignupContainer>
            <p>Ainda Não possui uma conta? </p>
            <Link to="/register" className="signup-button">CADASTRE-SE</Link>
          </S.SignupContainer>

        </S.HeaderContainer>

        {/* Login */}
        <S.LoginRight>
          <h2>Bem-Vindo(a)</h2>
          <p>FAÇA LOGIN PARA CONTINUAR</p>

          <form>
            <Input
              type="email"
              icon={BsEnvelope}
              placeholder="Digite Seu Email"
              value={ loginEmail }
            />
            
            <Input
              type="password"
              icon={ BsLock }
              placeholder="********"
              isPasswordVisible={ isPasswordVisible }
              onTogglePasswordVisibility={() => setIsPasswordVisible(!isPasswordVisible)}
              value={ loginSenha }
            />

            <Button onCLick={fazerLogin} text="Entrar" />
            {mensagem && <p>{mensagem}</p>}

            <S.Options>
              <label>
                <input type="checkbox" /> Mantenha-me Conectado
              </label>
            </S.Options>
          </form>
        </S.LoginRight>
      </S.ContentWrapper>
    </S.LoginContainer>
  );
};

export default Login;
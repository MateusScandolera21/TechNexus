import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './LoginStyles';

import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import Sidebar from '../../Components/Sidebar/Sidebar';

import { BsEnvelope, BsLock, BsChevronBarLeft } from "react-icons/bs";


const Login = () => {
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
            />
            
            <Input
              type="password"
              icon={BsLock}
              placeholder="********"
              isPasswordVisible={isPasswordVisible}
              onTogglePasswordVisibility={() => setIsPasswordVisible(!isPasswordVisible)}
            />

            <Button text="Entrar" />

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
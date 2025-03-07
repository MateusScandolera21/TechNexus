import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './ForgotStyles';
import Sidebar from '../Sidebar/Sidebar'

import { 
  BsChevronBarLeft,
  BsEnvelope,
} from "react-icons/bs";

import Input from '../Input/Input';
import Button from '../Button/Button';



const Forgot = () => {
  return(
    <S.ForgotContainer>
      
      <Sidebar showSteps={false} forceTopBar={false} />

      <S.ContentWrapper>
        <S.HeaderContainer>
          <S.TopLeftLogin to="/login">
            <BsChevronBarLeft size={20} /> Página de Login
          </S.TopLeftLogin>
      
          <S.SignupContainer>
            <p>Ainda Não possui uma conta? </p>
            <Link to="/register" className="signup-button">CADASTRE-SE</Link>
          </S.SignupContainer>
        </S.HeaderContainer>

        <S.LoginRight>
          <h2>Recuperar Senha</h2>
          <p>Insira o E-mail do cadastro para recuperar a senha</p>

          <form>
            <Input
              type="email"
              icon={BsEnvelope}
              placeholder="Digite Seu E-mail"
            />
            
            <Button text="Enviar" />
            

          </form>
        </S.LoginRight>
      </S.ContentWrapper>
    </S.ForgotContainer>
  );
}

export default Forgot;
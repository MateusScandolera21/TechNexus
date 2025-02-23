import React from 'react';
import {
  HomeContainer,
  HeaderContainer,
  LogoSuperior,
  Logo,
  BotaoSuperiorDireito,
  ContentContainer,
  LogoTxtInfo,
  TextPrincipal,
  Linha,
  LogoInferior,
  LogoInf,
  IconesRedesSociais,
  IconeFacebook,
  IconeInstagram
} from './StyledHome';
import Button from '../../Components/Button/Button';
import logo from '../../img/Technexus-04.svg';
import logotxt from '../../img/Technexus-03.svg';

const Home = () => {
  return (
    <HomeContainer>
      <HeaderContainer>
        <LogoSuperior>
          <Logo src={logo} alt='Tech Nexus logo' />
        </LogoSuperior>

        <BotaoSuperiorDireito to="/login">
          <Button text="Entrar" variant="primary" />
        </BotaoSuperiorDireito>
      </HeaderContainer>

      <ContentContainer>
        <LogoTxtInfo src={logotxt} alt='Tech Nexus' />
        <TextPrincipal>
          <p>
            Aqui, networking é mais do que um encontro de interesses; 
            é a fundação para as inovações que transformam o mundo. 
            Quando talentos e conhecimentos se unem, o impossível torna-se 
            possível. Somos a ponte que conecta talentos, o catalisador que 
            promove o crescimento, e a plataforma que facilita o progresso. 
          </p>
        </TextPrincipal>
      </ContentContainer>

      <Linha />

      <LogoInferior>
        <LogoInf src={logo} alt='Tech Nexus logo' />
      </LogoInferior>

      <IconesRedesSociais>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <IconeFacebook size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <IconeInstagram size={20} />
        </a>
      </IconesRedesSociais>
    </HomeContainer>
  );
};

export default Home;
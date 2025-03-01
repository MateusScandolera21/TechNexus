import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import backgroundImage from '../../img/computer2.svg'; // Importe a imagem de fundo

export const HomeContainer = styled.div`
  padding: 20px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #fff;
  }

  @media (max-width: 1000px) {
    padding: 10px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  position: absolute; /* Posiciona no topo */
  top: 34px; /* Distância do topo */
  left: 0;

  @media (max-width: 1000px) {
    position: static;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  @media (max-width: 1000px) {
    position: static; /* Remove o posicionamento absoluto */
    flex-direction: row; /* Mantém a direção da linha */
    justify-content: space-between; /* Espaço entre a logo e o botão */
    align-items: center; /* Centraliza verticalmente */
    margin-top: 20px;
    padding: 0 20px; /* Adiciona padding nas laterais */
  }
`;

export const LogoSuperior = styled.div`
  position: absolute;
  top: 34px;
  left: 4.50rem;

  @media (max-width: 1600px) {
    left: 4rem;
  }

  @media (max-width: 1280px) {
    left: 2rem;
  }

  @media (max-width: 1000px) {
    position: static;
    margin-top: 20px;
    text-align: left;
  }
`;

export const Logo = styled.img`
  width: 10rem;
  height: 3.938rem;
  margin-left: 5rem;

  @media (max-width: 1600px) {
    width: 8rem;
    height: 3rem;
    margin-left: 3rem;
  }

  @media (max-width: 1280px) {
    width: 6rem;
    height: 2.5rem;
    margin-left: 2rem;
  }

  @media (max-width: 1000px) {
    width: 8rem;
    height: auto;
    margin-left: 0;
  }
`;

export const BotaoSuperiorDireito = styled(Link)`
  position: absolute;
  top: 34px;
  right: 6.80rem;
  text-decoration: none;

  @media (max-width: 1600px) {
    right: 4rem;
  }

  @media (max-width: 1280px) {
    right: 2rem;
  }

  @media (max-width: 1000px) {
    position: static;
    margin-top: 20px;
    text-align: right;
  }
`;

export const ContentContainer = styled.div`
  position: absolute;
  top: 12rem; /* Ajuste conforme a altura da logo superior */
  left: 6.80rem; /* Alinha com a logo superior esquerda */
  text-align: left;

  @media (max-width: 1600px) {
    left: 4rem;
    top: 10rem;
  }

  @media (max-width: 1280px) {
    left: 2rem;
    top: 8rem;
  }

  @media (max-width: 1000px) {
    position: static;
    margin-top: 2rem;
    text-align: center;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LogoTxtInfo = styled.img`
  width: 21rem;
  height: auto;
  margin-bottom: 20px; /* Espaço entre a logotxt e o texto */

  @media (max-width: 1600px) {
    width: 18rem;
  }

  @media (max-width: 1280px) {
    width: 15rem;
  }

  @media (max-width: 1000px) {
    width: 12rem;
  }
`;

export const TextPrincipal = styled.div`
  max-width: 500px;
  text-align: left;

  p {
    font-size: 1.5rem;
    font-family: Inter;
    font-style: normal;
    line-height: 150%;
    font-weight: 500;
    color: #fff;
  }

  @media (max-width: 1000px) {
    text-align: center;
    max-width: 90%;
  }
`;

export const Linha = styled.div`
  width: 86vw;
  height: 2px;
  margin: 0 auto;
  left: 6%;
  background-color: #E6E6E6;
  position: absolute;
  top: calc(100% - 134px);

  @media (max-width: 1600px) {
    top: calc(100% - 120px);
  }

  @media (max-width: 1280px) {
    top: calc(100% - 100px);
  }

  @media (max-width: 1000px) {
    width: 90%;
    position: static; /* Remove o posicionamento absoluto */
    margin-top: 20px; /* Espaço acima da linha */
    margin-bottom: 20px; /* Espaço abaixo da linha */
    order: 1; /* Garante que a linha fique abaixo do texto */
  }
`;

export const LogoInferior = styled.div`
  position: absolute;
  left: 6.80rem;
  top: calc(100% - 130px);

  @media (max-width: 1600px) {
    left: 4rem;
    top: calc(100% - 110px);
  }

  @media (max-width: 1280px) {
    left: 2rem;
    top: calc(100% - 90px);
  }

  @media (max-width: 1000px) {
    position: static;
    margin-top: 20px;
    text-align: center;
  }
`;

export const LogoInf = styled.img`
  width: 150px;
  height: auto;

  @media (max-width: 1600px) {
    width: 120px;
  }

  @media (max-width: 1280px) {
    width: 100px;
  }

  @media (max-width: 1000px) {
    width: 100px;
  }
`;

export const IconesRedesSociais = styled.div`
  position: absolute;
  top: calc(100% - 60px);
  left: 7.50rem;
  display: flex;
  gap: 20px;

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 1600px) {
    left: 5rem;
  }

  @media (max-width: 1280px) {
    left: 3rem;
  }

  @media (max-width: 1000px) {
    position: static;
    margin-top: 20px;
    justify-content: center;
  }
`;

export const IconeFacebook = styled(BsFacebook)`
  color: #E6E6E6;
  transition: color 0.3s ease;

  &:hover {
    color: #1877f2;
  }
`;

export const IconeInstagram = styled(BsInstagram)`
  color: #E6E6E6;
  transition: color 0.3s ease;

  &:hover {
    color: #e4405f;
  }
`;
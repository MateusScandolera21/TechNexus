import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RegisterContainer = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  padding: 0;
  margin: 0;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
  padding-left: 20px;

  @media (max-width: 1000px) {
    padding-top: 120px;
    padding-left: 0;
    align-items: center;
    text-align: center;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 20px 20px 20px 0;
  text-align: left;

  @media (max-width: 1000px) {
    padding: 20px;
    text-align: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

export const FormColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-left: 15rem;

  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;

export const OptionsColumn = styled.div`
  text-align: center;
  h2 {
    margin-bottom: 2rem;
  }

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 11rem;
  margin-top: 5rem;

  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 2rem;
  }
`;

export const OptionItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 10px;
  justify-content: flex-start;

  input[type="radio"] {
    margin-right: 10px;
    transform: scale(1.5);
  }

  label {
    font-size: larger;
  }

  @media (max-width: 1000px) {
    input[type="radio"] {
    margin-right: 10px;
    transform: scale(1.5);
    margin-left: 10rem;
  }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5.5rem;

  @media (max-width: 1000px) {
    justify-content: center;
    margin-top: 2rem;
  }
`;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 7rem;
  left: 7rem;
  right: 0;
  display: flex;
  justify-content: space-between; /* Espaço entre os elementos */
  align-items: center;
  padding: 0 20px;
  z-index: 10;

  @media (max-width: 1000px) {
    justify-content: space-between;
    gap: 3rem;
    padding: 1rem;
    margin-right: 2rem;
  }
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
`;

export const LoginLinkContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;

  p {
    margin: 0;
  }

  a.loginButton {
    margin-left: 5px;
    color: #273330;
    text-decoration: none;
    border: 1px solid #273330;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-weight: bold;

    &:hover {
      background-color: #273330;
      color: #fff;
    }
  }

  @media (max-width: 1000px) {
    a.loginButton {
      color: #273330;
      border-color: #273330;

      &:hover {
        background-color: #273330;
      }
    }
  }
`;

export const FormMessage = styled.p`
  margin: 1rem 0;
  font-size: 1rem;
  color: #333;

  @media (max-width: 1000px) {
    display: none; /* Oculta o parágrafo em telas menores */
  }
`;

export const ErrorMessage = styled.p`
  align-self: flex-start;
  color: red;
  margin: 0.5rem 0;
`;
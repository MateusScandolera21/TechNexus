import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  position: relative;

  @media (max-width: 1000px) {
    padding-left: 0;
    margin-top: 5rem;
    align-items: center;
    text-align: center;
  }
`;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 20px; 
  left: 25%; 
  right: 20px; 
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 0 20px;
  z-index: 20; 

  @media (max-width: 1000px) {
    top: 80px; 
    left: 0;
    right: 0;
    padding: 10px 20px;
    background: transparent; 
  }
`;

export const SignupContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;

  a.signup-button {
    margin-left: 5px;
    color: #273330;
    text-decoration: none;
    border: 1px solid #273330;
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    font-weight: bold;

    &:hover {
      background-color: #273330;
      color: #fff;
    }
  }

  p {
    @media (max-width: 1000px) {
      display: none; 
    }
  }
`;

export const LoginRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30rem;
  
  @media (max-width: 1000px) {
    margin-left: 0; 
    padding: 1rem;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  font-size: 0.8rem;
  margin-top: 1rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TopLeftLogin = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
`;
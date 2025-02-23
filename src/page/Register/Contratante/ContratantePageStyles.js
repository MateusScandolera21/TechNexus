import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RegisterContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: calc(15% - 50px);
  position: relative;

  @media (max-width: 1000px) {
    padding-left: 0;
    margin-top: 80px; 
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 30px;
  text-align: center;
  margin-left: 25%;

  @media (max-width: 1000px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
  }
`;

export const FormsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center; 
    width: 100%; 
  }
`;

export const FormWrapper = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 50%;

  @media (max-width: 1000px) {
    max-width: 400px; /* Limita a largura máxima */
  }
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  font-size: 14px;

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    box-sizing: border-box;
  }
`;

export const AddressGroup = styled.div`
  display: flex;
  gap: 10px;

  input {
    flex: 1;
  }

  input#numero {
    width: 100px;
  }
`;

export const InputIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .icon {
    position: absolute;
    left: -30px;
    color: #333;
    font-size: 25px;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    box-sizing: border-box;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 14rem;

  @media (max-width: 1000px) {
    justify-content: center;
    margin-top: 3rem;
  }
`;

export const TopLeftLink = styled(Link)`
  position: fixed;
  top: 100px;
  left: 5rem;
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  z-index: 10;

  @media (max-width: 1000px) {
    top: 80px;
    left: 20px;
  }
`;
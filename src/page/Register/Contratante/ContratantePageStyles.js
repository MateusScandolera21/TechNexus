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
  margin-top: calc(15% - 150px);
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

  h2 {
    margin-bottom: 4rem;
  }

  @media (max-width: 1000px) {
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
  }
`;

export const FormsWrapper = styled.div`
  display: flex;
  margin-left: 4rem;
  margin-top: 0;
  justify-content: space-between;
  gap: 20px;
  

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center; 
    width: 100%; 
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 coluna em telas menores */
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  font-size: 14px;
  align-items: flex-start; 
  margin-bottom: 16px;

  label {
    margin-bottom: 8px;
    font-weight: bold; 
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

export const AddressGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px; /* Endereço ocupa mais espaço, Número menos */
  gap: 10px; /* Espaçamento entre os campos */
  width: 100%;
  align-items: start;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    text-align: left;
  }

  input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    text-align: left;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  margin-left: 3rem;

  @media (max-width: 1000px) {
    justify-content: center;
    margin-top: 1rem;
  }
`;

export const TopLeftLink = styled(Link)`
  position: fixed;
  top: 150px;
  left: 5rem;
  text-decoration: none;
  color: #000;
  font-size: 1.3rem;
  display: inline-flex;
  align-items: center;
  z-index: 10;

  @media (max-width: 1000px) {
    top: 140px;
    left: 50px;
  }
`;
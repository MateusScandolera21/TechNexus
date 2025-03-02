import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  gap: 40px; 
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  padding: 30px;
  text-align: left;
  margin: 0 auto;
  margin-top: 10rem;
  box-sizing: border-box;
  align-items: flex-start; 

  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

export const TrainingContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 20px;
  min-height: 150px; 

  @media (max-width: 768px) {
    max-width: 100%;
    
  }
`;

export const TrainingSection = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  grid-auto-rows: min-content; 
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
  min-height: 200px; 
  align-items: start; 

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: auto;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;

  select {
    padding: 12px 16px;
    width: 100%;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  font-size: 14px;
  align-items: flex-start;
  margin-bottom: 16px;
  align-self: start; /* Evita desalinhamento ao adicionar novos elementos */

  label {
    margin-bottom: 8px;
    font-weight: bold;
    text-align: left;
  }

  input {
    width: 100%;
    max-width: 500px;
    padding: 14px 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    outline: none;
  }
`;

export const AddressGroup = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
  align-items: center;

  select {
    flex-basis: 250px;
    padding: 10px 16px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    background: white;
    text-align: left;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex-basis: 100px;
  }
`;

export const ButtonAdd = styled.div`
  margin-top: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #33685A;
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 100%; 
  padding: 10px; 

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
`;

export const ButtonRemove = styled.button`
  margin-top: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #33685A;
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 100%; 
  padding: 10px;
  background-color: #FAF9F9;

  &:hover {
    text-decoration: underline;
    color: red;
  }
`;
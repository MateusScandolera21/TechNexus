import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  input {
    width: 100%;
    padding: 14px;
    border: 1px solid #ccc;
    border-radius:5px; 
    font-size: 14px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const FormGroup = styled.div`
display: flex;
flex-direction: column;
border-radius: 5px;
font-size: 14px;
align-items: flex-start; 


label {
  margin-bottom: 8px;
  font-weight: bold; 
}

input {
  width: 100%;
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  outline-color: #488574;
}
`;
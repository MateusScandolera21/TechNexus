import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 31.25rem;
  max-width: 800px;
  margin-bottom: 1rem;
  position: relative;
  margin-top: 1rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

export const InputIconWrapper = styled.div`
  position: relative;
`;

export const EyeButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 0;
`;

export const Icon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #333;
  font-size: 1.2rem;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 1.5rem;
  padding-left: 3rem;
  padding-right: 3rem; 
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1rem;
`;

export const PasswordIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #333;
  font-size: 1.2rem;
  cursor: pointer;
`;
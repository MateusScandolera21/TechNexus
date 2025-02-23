import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 31.25rem;
  max-width: 800px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  background-color: #273330;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:hover {
    background-color: #488574;
  }

  /* Variante "primary" */
  &.primary {
    background-color: #273330;
    color: #fff;
    width: 7rem;
    max-width: 800px;
    padding: 1.5rem;
  }

  &.primary:hover {
    background-color: #488574;
  }
`;

export const ButtonText = styled.span`
  flex-grow: 1;
  text-align: left;
`;

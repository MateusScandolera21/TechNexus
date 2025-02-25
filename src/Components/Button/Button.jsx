import React from 'react';
import { BsArrowBarRight } from 'react-icons/bs';
import { StyledButton, ButtonText } from './ButtonStyles';

const Button = ({ onClick, text, variant }) => {
  return (
    <StyledButton type="submit" onClick={onClick} className={variant ? `button ${variant}` : 'button'}>
      <ButtonText>{text}</ButtonText>
      <BsArrowBarRight size={20} /> {/* Ícone usado diretamente */}
    </StyledButton>
  );
};

export default Button;
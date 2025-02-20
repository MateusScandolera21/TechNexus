import React from 'react';
import "./Style.css";
import { BsArrowBarRight } from "react-icons/bs";

const Button = ({ onClick, text, variant }) => {
  // Define a classe com base na prop `variant`
  const buttonClass = variant ? `button ${variant}` : 'button';

  return (
    <button type="submit" onClick={onClick} className={buttonClass}>
      <span className="button-text">{text}</span>
      <BsArrowBarRight size={20} className='button-icon' />
    </button>
  );
};

export default Button;

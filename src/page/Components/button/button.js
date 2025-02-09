import React from 'react';
import "./Style.css";
import { BsArrowBarRight } from "react-icons/bs";


const Button = ({ onClick, text }) => {
  return (
      
    <button type="submit" onClick={onClick}>
      <span className="button-text" 
        >{text}
      </span>
      <BsArrowBarRight size={20} className='button-icon'/>
    </button>
         
  );
};

export default Button;

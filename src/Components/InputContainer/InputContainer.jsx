import React from 'react';
import './Styles.css'; 

import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

const InputGroup = ({ 
  type, 
  icon: Icon, 
  placeholder, 
  isPasswordVisible, 
  onTogglePasswordVisibility, 
  value, 
  onChange}) => {
  return (
    <div className="InputContainer">
      <label htmlFor={type} />
      <div className="input-icon">
        {Icon && <Icon className="icon" />}
        <input
          type={ type === 'password' && isPasswordVisible ? 'text' : type }
          id={ type }
          placeholder={ placeholder }
          value={ value }
          onChange={ onChange }
        />
        {type === 'password' && (
          <button type="button" className="eye-button" onClick={onTogglePasswordVisibility}>
            {isPasswordVisible ? (
              <BsEye className="icon-password" />
            ) : (
              <BsEyeSlash className="icon-password" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputGroup;
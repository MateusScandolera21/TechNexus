import React from 'react';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import {
  InputContainer,
  InputIconWrapper,
  EyeButton,
  Icon,
  InputField,
  PasswordIcon,
} from './InputStyles';

const Input = React.forwardRef(
  (
    {
      type,
      icon: IconComponent,
      placeholder,
      isPasswordVisible,
      onTogglePasswordVisibility,
      value,
      onChange,
    },
    ref
  ) => {
    return (
      <InputContainer>
        <label htmlFor={type} />
        <InputIconWrapper>
          {IconComponent && <Icon as={IconComponent} />}

          <InputField
            type={type === 'password' && isPasswordVisible ? 'text' : type}
            id={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            ref={ref} // Passando a ref para o input
          />

          {type === 'password' && (
            <EyeButton type="button" onClick={onTogglePasswordVisibility}>
              {isPasswordVisible ? (
                <PasswordIcon as={BsEye} />
              ) : (
                <PasswordIcon as={BsEyeSlash} />
              )}
            </EyeButton>
          )}
        </InputIconWrapper>
      </InputContainer>
    );
  }
);

export default Input;
import { React, useState} from 'react';
import './Styles.css';
import { Link } from 'react-router-dom';

import Button from "../../Components/button/button";
import Sidebar from "../../Components/Sidebar/Sidebar";
import InputGroup from '../../Components/InputContainer/InputContainer';


import { BsEnvelope } from "react-icons/bs";
import { BsLock } from "react-icons/bs";
import { BsChevronBarLeft } from "react-icons/bs";



const Login = () => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="login-container">

      {/* Link Voltar para Página Inicial */}
      <Link to="/" className="top-left-login"><BsChevronBarLeft size={20} /> Página Inicial</Link>

      {/* Botão CADASTRE-SE */}
      <div className="signup-container">
        <p>Ainda Não possui uma conta? </p>
        <Link to="/register" className="signup-button">CADASTRE-SE</Link>
      </div>

      {/* Informações sidebar */}
      <Sidebar showSteps={false} />

      {/* Login */}
      <div className="login-right">
        <h2>Bem-Vindo(a)</h2>
        <p>FAÇA LOGIN PARA CONTINUAR</p>

        <form>
        <InputGroup
            type="email"
            icon={BsEnvelope}
            placeholder="Digite Seu Email"
          />
          
          <InputGroup
            type="password"
            icon={BsLock}
            placeholder="********"
            isPasswordVisible={isPasswordVisible}
            onTogglePasswordVisibility={() => setIsPasswordVisible(!isPasswordVisible)}
          />



          <Button text="Entrar" />

          <div className="options">
            <label>
              <input type="checkbox" /> Mantenha-me Conectado
            </label>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;

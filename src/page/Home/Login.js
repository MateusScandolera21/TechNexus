import React from 'react';
import './Login.css';
import { BsArrowBarRight } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsLock } from "react-icons/bs";

const Login = () => {
  return (
    <div className="login-container">
      {/* Botão CADASTRE-SE */}
      <div className="signup-container">
        <p>Ainda Não possui uma conta? </p>
        <a href="#register" className="signup-button">CADASTRE-SE</a>
      </div>

      {/* Informações */}
      <div className="login-left">
        <div className="login-logo">
          <div className="logo-placeholder">Logo</div>
          <h1>TecNexus</h1>
        </div>
        <div className="login-message">
          <h2>Oportunidades de Crescimento Profissional</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
      </div>

      {/* Login */}
      <div className="login-right">
        <h2>Bem-Vindo(a)</h2>
        <p>FAÇA LOGIN PARA CONTINUAR</p>
        <form>
          <div className="input-group">
            <label htmlFor="email"/>
            <div className="input-icon">
              <BsEnvelope className="icon" />
              <input type="email" placeholder="Digite Seu Email" />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="password"/>
            <div className="input-icon">
              <BsLock className="icon" />
              <input type="password" id="password" placeholder="********" />
            </div>
          </div>
          <button type="submit">
            <span className="button-text">Entrar</span>
            <BsArrowBarRight size={20} className='button-icon'/>

          </button>
          <div className="options">
            <a href="#forgot-password">Esqueceu a senha? Clique aqui!</a>
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

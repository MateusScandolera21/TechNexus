import React from 'react';
import './Styles.css';
import { BsArrowBarRight } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsLock } from "react-icons/bs";
import { Link } from 'react-router-dom';
import ImgLogo from '../img/Ativo 1.svg';

const Home = () => {
  return (
      <div className="login-container">

      {/* Botão CADASTRE-SE */}
        <div className="signup-container">
          <p>Ainda Não possui uma conta? </p>
          <Link to="/register" className="signup-button">CADASTRE-SE</Link>
        </div>

        
      {/* Informações sidebar*/}
        <div className="login-left">
          <div className="logo">
            <img src={ImgLogo} alt="TechNexus Logo" className="logo-image" />
          </div>
          <div className="login-message">
            <div className="Text-Principal">
              <h2>Oportunidades</h2>
              <h2>de Crescimento Profissional</h2>
            </div>
            <p>
              Aqui, networking é mais do que um encontro de
              interesses; é a fundação para as inovações que transformam o mundo.
            </p>
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
                <input 
                type="email" 
                name="email"
                placeholder="Digite Seu Email" 
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="password"/>
              <div className="input-icon">
                <BsLock className="icon" />
                <input 
                type="password" 
                id="password" 
                placeholder="********"
                />
              </div>
            </div>
          
            <button type="submit">
              <span className="button-text">Entrar</span>
              <BsArrowBarRight size={20} className='button-icon'/>
            </button>

            <div className="options">
              {/*<a href="#forgot-password">Esqueceu a senha? Clique aqui!</a>*/}
              <label>
               <input type="checkbox" /> Mantenha-me Conectado
              </label>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Home;

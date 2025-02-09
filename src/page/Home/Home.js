import React from 'react';
import './Styles.css';
import Button from "../Components/button/button";
import Sidebar from "../Components/Sidebar/Sidebar";
import { BsEnvelope } from "react-icons/bs";
import { BsLock } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="login-container">

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
          <div className="input-group">
            <label htmlFor="email" />
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
            <label htmlFor="password" />
            <div className="input-icon">
              <BsLock className="icon" />
              <input
                type="password"
                id="password"
                placeholder="********"
              />
            </div>
          </div>

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

export default Home;

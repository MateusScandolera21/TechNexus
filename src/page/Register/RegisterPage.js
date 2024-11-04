import React from "react";
import './Styles.css';
import { BsArrowBarRight } from "react-icons/bs";

function RegisterPage() {
  return (
    <div className="register-container"> 

      {/* Sidebar Etapa */}
      <div className="sidebar">
        <div className="logo">
          <h1>TecNexus</h1>
        </div>
        <div className="stepContainer">
          <div className="step">
            <div className="circle"></div>
            <span className="step-number">Etapa 01</span>
          </div>
          <div className="step">
            <div className="circle"></div>
            <span className="step-number">Etapa 02</span>
          </div>
          <div className="step">
            <div className="circle"></div>
            <span className="step-number">Etapa 03</span>
          </div>
          <div className="step">
            <div className="circle"></div>
            <span className="step-number">Etapa 04</span>
          </div>
          <div className="step">
            <div className="circle"></div>
            <span className="step-number">Etapa 05</span>
          </div>
          </div>
        </div>

        <div class="main">
          <h2>Gostaria de se Cadastrar como:</h2>
          <div className="container-option">
            <div class="option single-option">
              <input type="radio" id="input1" name="options"/>
              <label for="input1"> CONTRATANTE</label>
            </div>

            <div class="option group-options">
              <div class="option">
                <input type="radio" id="option2" name="options"/>
                <label for="option2">PRESTADOR DE SERVOÇOS</label>
              </div>
            </div>
          </div>

          <button type="submit">
              <span className="button-text">Entrar</span>
              <BsArrowBarRight size={20} className='button-icon'/>
          </button>
        </div>
      </div>
  );
}

export default RegisterPage;

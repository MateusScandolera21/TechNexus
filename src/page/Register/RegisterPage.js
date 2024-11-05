import React, { useState } from "react";
import './Styles.css';
import { BsArrowBarRight } from "react-icons/bs";
import { BsChevronBarLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleScroll = (event) => {
    if (event.deltaY > 0 && currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="register-container"> 

      {/* Sidebar Etapa */}
      <div className="sidebar">
        <div className="logo">
          <h1>TechNexus</h1>
        </div>
        <div className="stepContainer">
          {[...Array(5)].map((_, index) => (
            <div className="step" key={index}>
              <div className={`circle ${index <= currentStep ? 'active' : ''}`}>
                {index === currentStep && <div className="inner-circle"></div>}
              </div>
              <span className="step-number">Etapa {index + 1}</span>
            </div>
          ))}
        </div>
      </div>

        <div class="main" name="Etapa 1" onWheel={handleScroll}>

          {/* Link Voltar para Página Inicial */}
          <Link to="/" className="top-left-link"><BsChevronBarLeft size={20} /> Página Inicial</Link>

          <h2>Gostaria de se Cadastrar como:</h2>
          <div className="container-option">
            <div class="option single-option">
              <input type="radio" id="input1" name="options"/>
              <label for="input1"> CONTRATANTE</label>
            </div>

            <div class="option group-options">
              <div class="option">
                <input type="radio" id="option2" name="options"/>
                <label for="option2">PRESTADOR DE SERVIÇOS</label>
              </div>
            </div>
          </div>

          <button type="submit" onClick={handleNext}>
              <span className="button-text">Proxima Etapa</span>
              <BsArrowBarRight size={20} className='button-icon'/>
          </button>
        </div>
      </div>
  );
}

export default RegisterPage;

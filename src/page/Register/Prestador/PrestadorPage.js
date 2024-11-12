import React, { useState } from "react";
import './Style.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { BsArrowBarRight } from "react-icons/bs";
import { BsChevronBarLeft } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleScroll = (event) => {
    if (event.deltaY > 0 && currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (selectedOption === "contratante") {
      navigate("/pagina-contratante");
    } else if (selectedOption === "prestador") {
      navigate("/pagina-prestador");
    } else {
      alert("Por favor, selecione uma opção para continuar.");
    }
  };

  return (
    <div className="register-container"> 

      {/* Sidebar*/}
      <Sidebar currentStep={currentStep} />
      

      <div className="main" name="Etapa 1" onWheel={handleScroll}>

        {/* Link Voltar para Página Inicial */}
        <Link to="/" className="top-left-link"><BsChevronBarLeft size={20} /> Página Inicial</Link>

        <h2>Gostaria de se Cadastrar como:</h2>
        <div className="container-option">
          <div className="option single-option">
            <input
              type="radio"
              id="input1"
              name="options"
              value="contratante"
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label htmlFor="input1"> CONTRATANTE</label>
          </div>

          <div className="option group-options">
            <div className="option">
              <input
                type="radio"
                id="option2"
                name="options"
                value="prestador"
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <label htmlFor="option2">PRESTADOR DE SERVIÇOS</label>
            </div>
          </div>
        </div>

        <button type="submit" onClick={handleNext}>
          <span className="button-text">Proxima Etapa</span>
          <BsArrowBarRight size={20} className="button-icon" />
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;

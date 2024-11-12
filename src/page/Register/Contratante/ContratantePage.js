import React, { useState } from "react";
import './styles.css';
import { BsArrowBarRight } from "react-icons/bs";
import { BsChevronBarLeft } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';

function ContratantePage() {
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

      <div className="main" name="Etapa 1" onWheel={handleScroll}>

        {/* Link Voltar para Página Inicial */}
        <Link to="/" className="top-left-link"><BsChevronBarLeft size={20} /> Página Inicial</Link>

       

        <button type="submit" onClick={handleNext}>
          <span className="button-text">Proxima Etapa</span>
          <BsArrowBarRight size={20} className="button-icon" />
        </button>
      </div>
    </div>
  );
}

export default ContratantePage;

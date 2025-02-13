import React, { useState } from "react";
import './Register.css';

import Sidebar from '../../Components/Sidebar/Sidebar';
import Button from '../../Components/button/button';

import { BsChevronBarLeft } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';


function RegisterPage() {
  const [currentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  
  /* Navegação para as paginas Contratante/Prestador */
  const handleNext = () => {
    if (!selectedOption) {
      alert("Por favor, selecione uma opção para continuar.");
      return;
    }

    if (selectedOption === "contratante") {
      navigate('/contratante');
    } else if (selectedOption === "prestador") {
      navigate("/prestador");
    }
  };

  return (
    <div className="register-container"> 
      {/* Sidebar */}
      <Sidebar currentStep={currentStep} />

      <div className="main" name="Etapa 1">
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
              checked={selectedOption === "contratante"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label htmlFor="input1">CONTRATANTE</label>          
          </div>

          <div className="option group-options">
            <div className="option">
              <input
                type="radio"
                id="option2"
                name="options"
                value="prestador"
                checked={selectedOption === "prestador"}  // Adicionado checked
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <label htmlFor="option2">PROFISSIONAL</label>
            </div>
          </div>
        </div>

        <Button onClick={handleNext} text="Próximo" />

      </div>
    </div>
  );
}

export default RegisterPage;

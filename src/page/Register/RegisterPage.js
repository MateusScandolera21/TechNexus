import React, { useState } from "react";
import './Register.css';
import Sidebar from '../Components/Sidebar/Sidebar';
import Button from '../Components/button/button'
import { BsChevronBarLeft } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [currentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

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
              <label htmlFor="option2">PROFISSIONAL</label>
            </div>
          </div>
        </div>

        <Button onClick={handleNext} text="Proximo" />
      </div>
    </div>
  );
}

export default RegisterPage;
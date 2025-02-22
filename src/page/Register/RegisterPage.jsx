import React, { useState } from "react";
import './Register.css';

import Sidebar from '../../Components/Sidebar/Sidebar';
import Button from '../../Components/button/button';
import ButtonContainer from "../../Components/ButtonContainer/ButtonContainer";

import { BsChevronBarLeft } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { BsEnvelope, BsLock } from "react-icons/bs";

function RegisterPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

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
      <Sidebar showSteps={true} />

      <div className="main">
        {/* Link Voltar para Página Inicial */}
        <Link to="/login" className="top-left"><BsChevronBarLeft size={20} /> Página Inicial</Link>

        {/* Container dos dois formulários */}
        <div className="form-container">
          
          {/* Formulário e opções lado a lado */}
          <div className="login-cadastro">
            {/* Formulário de Login */}
            <div className="test1">

              <h2>Cadastra-se</h2>
              <p>INSIRA O EMAIL E CRIE A SENHA PARA CONTINUAR</p>

              <form>
                <ButtonContainer
                  type="email"
                  icon={BsEnvelope}
                  placeholder="Digite Seu Email"
                />
                
                <ButtonContainer
                  type="password"
                  icon={BsLock}
                  placeholder="Digite sua Senha"
                  isPasswordVisible={isPasswordVisible}
                  onTogglePasswordVisibility={() => setIsPasswordVisible(!isPasswordVisible)}
                />

                <ButtonContainer
                  type="password"
                  icon={BsLock}
                  placeholder="Confirmar Senha"
                  isPasswordVisible={isPasswordVisible}
                  onTogglePasswordVisibility={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              </form>
            </div>

            {/* Opções de seleção */}
            <div className="test2">
              <h2>Gostaria de se Cadastrar como:</h2>
              <div className="container-option">
                <div className="option">
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
                      checked={selectedOption === "prestador"}
                      onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    <label htmlFor="option2">PROFISSIONAL</label>
                  </div>
                </div>
              </div>

              {/* Botão Próximo */}
              <div className="button-login">
                <Button onClick={handleNext} text="Próximo" />
              </div>

            </div>
          </div>    
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
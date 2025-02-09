import React, { useState } from "react";
import "./styles.css";
import Button from "../../Components/button/button";
import { BsChevronBarLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { BsEnvelopeAt } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";



function ContratantePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption] = useState(null);
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
      navigate("/contratante");
    } else if (selectedOption === "prestador") {
      navigate("/prestador");
    } else {
      alert("Por favor, selecione uma opção para continuar.");
    }
  };

  return (
    <div className="register-container">
      {/* Sidebar */}
      <Sidebar currentStep={currentStep} alwaysCompleteFirstStep={true} />

      <div className="main" name="Etapa 1" onWheel={handleScroll}>
        {/* Link Voltar */}
        <Link to="/register" className="top-left-link">
          <BsChevronBarLeft size={20} /> Página Inicial
        </Link>

        {/* Container dos dois formulários */}
        <div className="form-container">
          <h2>Cadastre suas Informações</h2>
          <p>COLOQUE AS INFORMAÇÕES DA SUA EMPRESA</p>

          <div className="forms-wrapper">
            {/* Formulário de Informações da Empresa */}
            <div className="form-wrapper grid-info">
              <h2>Informações</h2>
              <form>
                <div className="grid-container single-column">
                  <div className="form-group">
                    <input type="text" placeholder="CNPJ"/>
                  </div>

                  <div className="form-group">
                    <input type="text" placeholder="Razão Social"/>
                  </div>

                  <div className="form-group">
                    <input type="text" placeholder="Nome Fantasia"/>
                  </div>

                  <div className="form-group">
                    <input type="text" placeholder="CNAE Principal"/>
                  </div>

                  <div className="form-group">
                    <input type="text" placeholder="CEP"/>
                  </div>

                  <div className="form-group">
                    <input type="text" placeholder="Endereço"/>
                  </div>

                  <div className="form-group">
                    <input type="text" placeholder="Nº"/>
                  </div>

                  <div className="form-group">
                    <input type="text" placeholder="Bairro"/>
                  </div>

                  <div className="form-group">
                    <input type="text" placeholder="Complemento"/>
                  </div>
                </div>
              </form>
            </div>

            {/* Formulário de Contato */}
            <div className="form-wrapper contact-form">
              <h2>Contato</h2>

              <form>
                <div className="grid-container single-column">
                  
                  <div className="form-group">
                    <div className="input-icon-wrapper">
                      <BsFillTelephoneFill className="icon" />
                      <input type="text" placeholder="+55(01)23456-7890" />
                    </div>
                  </div>

                  
                  <div className="form-group email-input">
                    <div className="input-icon-wrapper">
                      <BsEnvelopeAt className="icon" />
                      <input type="email" placeholder="exemplo@email.com" />
                    </div>
                  </div>

                  
                  <div className="form-group">
                    <div className="input-icon-wrapper">
                      <BsGlobe className="icon" />
                      <input type="text" placeholder="Outra Rede Social (Opcional)"/>
                    </div>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>

        <Button onClick={handleNext} text="Próximo" />
      </div>
    </div>
  );
}

export default ContratantePage;

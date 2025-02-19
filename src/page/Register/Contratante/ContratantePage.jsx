import React, { useState, useEffect, useCallback } from "react";
import { withMask } from 'use-mask-input';
import { fetchAddressByZipcode } from '../../../api/cepService';
import "./styles.css";

import Button from "../../../Components/button/button";
import Sidebar from "../../../Components/Sidebar/Sidebar";

import { BsChevronBarLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsEnvelopeAt, BsFillTelephoneFill, BsGlobe } from "react-icons/bs";


function ContratantePage() {
  
  // Função para completar o CEP
  async function handleZipcodeBlur(e) {
    const zipcode = e.target.value;
  
    const address = await fetchAddressByZipcode(zipcode);
    if (address) {
      setAddress(address);
    } else {
      console.log("Endereço não encontrado.");
    }
  }

  const [address, setAddress] = useState({ city: '', street: '' });
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // Usando useCallback para memorizar a função
  const handleScroll = useCallback((event) => {
    if (event.deltaY > 0 && currentStep < 4) {
      // Scroll para baixo: Avança um passo
      setCurrentStep((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentStep > 1) {
      // Scroll para cima: Volta um passo
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]); // currentStep como dependência

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);



  return (
    <div className="register-container">

      {/* Sidebar */}
      {/*<Sidebar currentStep={currentStep} alwaysCompleteFirstStep={true} />*/}

      <div className="main" name="Etapa 1">
        
        {/* Link Voltar */}
        <Link to="/register" className="top-left-link">
          <BsChevronBarLeft size={20} /> Anterior
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
                    <input type="text" id='cnpj' placeholder="CNPJ" ref={withMask('99.999.999/9999-99')} />
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
                    <input 
                      type="text" 
                      id='cep' 
                      placeholder="CEP" 
                      ref={withMask('99999-999')} 
                      onBlur={handleZipcodeBlur}/>
                  </div>

                  <div className="form-group">
                    <div className="address-group">
                      <input
                        type="text"
                        placeholder="Endereço"
                        id="address"
                        value={address.street}
                      />

                      <input
                        type="text"
                        placeholder="Número"
                        id="numero"
                        />
                    </div>
                  </div>


                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder="Cidade"
                      id="city"
                      value={address.city}
                    />
                  </div>

                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder="Bairro"
                      value={address.neighborhood || ''}
                    />
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
                      <input type="text" id='phone' placeholder="(99)99999-9999" ref={withMask('(99)99999-9999')} />
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

              <div className="button-wrapper">
                <Button onClick={handleNext} disabled={currentStep === 4} text="Próximo" />
              </div>
            </div>
          </div>
        </div>

        
        
      </div>
    </div>
  );
}

export default ContratantePage;

import React, { useState } from "react";
import { withMask } from 'use-mask-input';
import { fetchAddressByZipcode } from '../../../api/cepService';

import { BsChevronBarLeft, BsEnvelopeAt, BsFillTelephoneFill, BsGlobe } from "react-icons/bs";

import Button from '../../../Components/Button/Button';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import * as S from './ContratantePageStyles';

function ContratantePage() {
  const [address, setAddress] = useState({ city: '', street: '' });

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

  return (
    <S.RegisterContainer>
     
      <Sidebar showSteps={true} forceTopBar={true}/>

      <S.TopLeftLink to="/register">
        <BsChevronBarLeft size={20} /> Anterior
      </S.TopLeftLink>

      <S.MainContent>
        
        {/* Container dos dois formulários */}
        <S.FormContainer>
          <h2>Cadastre suas Informações</h2>
          <p>COLOQUE AS INFORMAÇÕES DA SUA EMPRESA</p>

          <S.FormsWrapper>

            {/* Formulário de Informações da Empresa */}
            <S.FormWrapper>
              <h2>Informações</h2>
              <form>
                <S.GridContainer className="single-column">
                  <S.FormGroup>
                    <input type="text" id='cnpj' placeholder="CNPJ" ref={withMask('99.999.999/9999-99')} />
                  </S.FormGroup>

                  <S.FormGroup>
                    <input type="text" placeholder="Razão Social" />
                  </S.FormGroup>

                  <S.FormGroup>
                    <input type="text" placeholder="Nome Fantasia" />
                  </S.FormGroup>

                  <S.FormGroup>
                    <input type="text" placeholder="CNAE Principal" />
                  </S.FormGroup>

                  <S.FormGroup>
                    <input
                      type="text"
                      id='cep'
                      placeholder="CEP"
                      ref={withMask('99999-999')}
                      onBlur={handleZipcodeBlur}
                    />
                  </S.FormGroup>

                  <S.FormGroup>
                    <S.AddressGroup>
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
                    </S.AddressGroup>
                  </S.FormGroup>

                  <S.FormGroup>
                    <input
                      type="text"
                      placeholder="Cidade"
                      id="city"
                      value={address.city}
                    />
                  </S.FormGroup>

                  <S.FormGroup>
                    <input
                      type="text"
                      placeholder="Bairro"
                      value={address.neighborhood || ''}
                    />
                  </S.FormGroup>

                  <S.FormGroup>
                    <input type="text" placeholder="Complemento" />
                  </S.FormGroup>
                </S.GridContainer>
              </form>
            </S.FormWrapper>

            {/* Formulário de Contato */}
            <S.FormWrapper>
              <h2>Contato</h2>
              <form>
                <S.GridContainer className="single-column">
                  <S.FormGroup>
                    <S.InputIconWrapper>
                      <BsFillTelephoneFill className="icon" />
                      <input type="text" id='phone' placeholder="(99)99999-9999" ref={withMask('(99)99999-9999')} />
                    </S.InputIconWrapper>
                  </S.FormGroup>

                  <S.FormGroup className="email-input">
                    <S.InputIconWrapper>
                      <BsEnvelopeAt className="icon" />
                      <input type="email" placeholder="exemplo@email.com" />
                    </S.InputIconWrapper>
                  </S.FormGroup>

                  <S.FormGroup>
                    <S.InputIconWrapper>
                      <BsGlobe className="icon" />
                      <input type="text" placeholder="Outra Rede Social (Opcional)" />
                    </S.InputIconWrapper>
                  </S.FormGroup>

                </S.GridContainer>
              </form>

              <S.ButtonWrapper>
                <Button text="Próximo" />
              </S.ButtonWrapper>
            </S.FormWrapper>

          </S.FormsWrapper>
        </S.FormContainer>

      </S.MainContent>
    </S.RegisterContainer>
  );
}

export default ContratantePage;
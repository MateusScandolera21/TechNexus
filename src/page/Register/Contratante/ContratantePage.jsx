import React, { useState } from "react";
import { withMask } from 'use-mask-input';
import { fetchAddressByZipcode } from '../../../api/cepService';
import { BsChevronBarLeft } from "react-icons/bs";
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
      <Sidebar showSteps={true} forceTopBar={true} />
      <S.TopLeftLink to="/register">
        <BsChevronBarLeft size={20} /> Anterior
      </S.TopLeftLink>

      <S.MainContent>
        <S.FormContainer>
          <h2>Cadastre suas Informações</h2>
          <S.FormsWrapper>
            <form>
              <S.GridContainer>
                {/* Coluna 1 */}
                <S.FormGroup>
                  <label>CNPJ</label>
                  <input type="text" id='cnpj' placeholder="CNPJ" ref={withMask('99.999.999/9999-99')} />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Razão Social</label>
                  <input type="text" placeholder="Razão Social" />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Nome Fantasia</label>
                  <input type="text" placeholder="Nome Fantasia" />
                </S.FormGroup>

                <S.FormGroup>
                  <label>CNAE</label>
                  <input type="text" placeholder="CNAE Principal" />
                </S.FormGroup>

                <S.FormGroup>
                  <label>CEP</label>
                  <input type="text" id='cep' placeholder="CEP" ref={withMask('99999-999')} onBlur={handleZipcodeBlur} />
                </S.FormGroup>

                {/* Endereço e Número na mesma linha */}
                <S.AddressGroup>
                  <div>
                    <label htmlFor="address">Endereço</label>
                    <input type="text" placeholder="Endereço" id="address" value={address.street} />
                  </div>
                  <div>
                    <label htmlFor="numero">Número</label>
                    <input type="text" placeholder="Número" id="numero" />
                  </div>
                </S.AddressGroup>

                {/* Coluna 2 */}
                <S.FormGroup>
                  <label>Cidade</label>
                  <input type="text" placeholder="Cidade" id="city" value={address.city} />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Bairro</label>
                  <input type="text" placeholder="Bairro" value={address.neighborhood || ''} />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Complemento</label>
                  <input type="text" placeholder="Complemento" />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Telefone</label>
                  <input type="text" id='phone' placeholder="(99)99999-9999" ref={withMask('(99)99999-9999')} />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Email</label>
                  <input type="email" placeholder="exemplo@email.com" />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Rede Social (Opcional)</label>
                  <input type="text" placeholder="Outra Rede Social (Opcional)" />
                </S.FormGroup>
              </S.GridContainer>

              {/* <S.ButtonWrapper> <Button text="Próximo" /> </S.ButtonWrapper> */}
            </form>
          </S.FormsWrapper>
        </S.FormContainer>
      </S.MainContent>
    </S.RegisterContainer>
  );
}

export default ContratantePage;
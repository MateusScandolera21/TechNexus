import React, { useState } from "react";

import { useForm } from 'react-hook-form';
import { withMask } from 'use-mask-input';

import { fetchAddressByZipcode } from '../../../api/cepService';
import { BsChevronBarLeft } from "react-icons/bs";

import * as S from './ContratantePageStyles';
import Button from '../../../Components/Button/Button';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import SocialFields from '../../../Components/SocialFields/SocialFields';


function ContratantePage() {
  const [address, setAddress] = useState({ city: '', street: '', neighborhood: '' });
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [socialFields, setSocialFields] = useState([{ id: 1, value: '' }]);

  // Função para completar o CEP
  async function handleZipcodeBlur(e) {
    const zipcode = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (zipcode.length === 8) { // Verifica se o CEP tem 8 dígitos
      const address = await fetchAddressByZipcode(zipcode);
      if (address) {
        setAddress({
          city: address.localidade,
          street: address.logradouro,
          neighborhood: address.bairro,
        });
      } else {
        console.log("Endereço não encontrado.");
      }
    }
  }

  const onSubmit = data => {
    console.log(data);
  };

  
  
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <S.GridContainer>
                {/* Coluna 1 */}
                <S.FormGroup>
                  <label>CNPJ</label>
                  <input
                    type="text"
                    id='cnpj'
                    placeholder="CNPJ"
                    {...register('cnpj', { required: 'CNPJ é obrigatório' })}
                    ref={withMask('99.999.999/9999-99')}
                  />
                  {errors.cnpj && <S.ErrorMessage>{errors.cnpj.message}</S.ErrorMessage>}
                </S.FormGroup>

                <S.FormGroup>
                  <label>CEP</label>
                  <input
                    type="text"
                    id='cep'
                    placeholder="CEP"
                    {...register('cep', { required: 'CEP é obrigatório' })}
                    ref={withMask('99999-999')}
                    onBlur={handleZipcodeBlur}
                  />
                  {errors.cep && <S.ErrorMessage>{errors.cep.message}</S.ErrorMessage>}
                </S.FormGroup>

                <S.FormGroup>
                  <label>Razão Social</label>
                  <input
                    type="text"
                    placeholder="Razão Social"
                    {...register('razaoSocial', { required: 'Razão Social é obrigatória' })}
                  />
                  {errors.razaoSocial && <S.ErrorMessage>{errors.razaoSocial.message}</S.ErrorMessage>}
                </S.FormGroup>

                <S.AddressGroup>
                  <div>
                    <label htmlFor="address">Endereço</label>
                    <input
                      type="text"
                      placeholder="Endereço"
                      id="address"
                      value={address.street}
                      readOnly // Campo somente leitura
                      {...register('endereco')} // Sem validação obrigatória
                    />
                  </div>
                  <div>
                    <label htmlFor="numero">Número</label>
                    <input
                      type="text"
                      placeholder="Número"
                      id="numero"
                      {...register('numero', { required: 'Número é obrigatório' })}
                    />
                    {errors.numero && <S.ErrorMessage>{errors.numero.message}</S.ErrorMessage>}
                  </div>
                </S.AddressGroup>

                <S.FormGroup>
                  <label>Nome Fantasia</label>
                  <input
                    type="text"
                    placeholder="Nome Fantasia"
                    {...register('nomeFantasia', { required: 'Nome Fantasia é obrigatório' })}
                  />
                  {errors.nomeFantasia && <S.ErrorMessage>{errors.nomeFantasia.message}</S.ErrorMessage>}
                </S.FormGroup>

                <S.FormGroup>
                  <label>Bairro</label>
                  <input
                    type="text"
                    placeholder="Bairro"
                    value={address.neighborhood}
                    readOnly // Campo somente leitura
                    {...register('bairro')} // Sem validação obrigatória
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label>CNAE</label>
                  <input
                    type="text"
                    placeholder="CNAE Principal"
                    {...register('cnae', { required: 'CNAE é obrigatório' })}
                  />
                  {errors.cnae && <S.ErrorMessage>{errors.cnae.message}</S.ErrorMessage>}
                </S.FormGroup>

                <S.FormGroup>
                  <label>Cidade</label>
                  <input
                    type="text"
                    placeholder="Cidade"
                    id="city"
                    value={address.city}
                    readOnly // Campo somente leitura
                    {...register('cidade')} // Sem validação obrigatória
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="exemplo@email.com"
                    {...register('email', { required: 'Email é obrigatório', pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' } })}
                  />
                  {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
                </S.FormGroup>

                <S.FormGroup>
                  <label>Complemento</label>
                  <input
                    type="text"
                    placeholder="Complemento"
                    {...register('complemento')}
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Telefone</label>
                  <input
                    type="text"
                    id='phone'
                    placeholder="(99)99999-9999"
                    {...register('telefone', { required: 'Telefone é obrigatório' })}
                    ref={withMask('(99)99999-9999')}
                  />
                  {errors.telefone && <S.ErrorMessage>{errors.telefone.message}</S.ErrorMessage>}
                </S.FormGroup>

                <SocialFields socialFields={socialFields} setSocialFields={setSocialFields} />
              </S.GridContainer>

              {/* <S.ButtonWrapper> <Button type="submit" text="Próximo" /> </S.ButtonWrapper> */}
            </form>
          </S.FormsWrapper>
        </S.FormContainer>
      </S.MainContent>
    </S.RegisterContainer>
  );
}

export default ContratantePage;
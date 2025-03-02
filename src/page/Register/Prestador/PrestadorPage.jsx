import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { withMask } from 'use-mask-input';
import { fetchAddressByZipcode } from '../../../api/cepService';

import * as S from './PrestadorStyles';
import { BsChevronBarLeft } from "react-icons/bs";
import Sidebar from '../../../Components/Sidebar/Sidebar';
import SocialFields from '../../../Components/SocialFields/SocialFields';
import TrainingPage from '../../../Components/Training/TrainingPage';

const Prestador = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [address, setAddress] = useState({ city: '', street: '', neighborhood: '' });
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  // Função de preenchimento do endereço após o blur no CEP
  async function handleZipcodeBlur(e) {
    const zipcode = e.target.value.replace(/\D/g, ''); // remove caracteres não numéricos
    if (zipcode.length === 8) {
      const address = await fetchAddressByZipcode(zipcode);
      if (address) {
        // Atualiza o estado do endereço
        setAddress({
          city: address.city,
          street: address.street,
          neighborhood: address.neighborhood,
        });

        // Atualiza os valores no react-hook-form
        setValue('endereco', address.street);  // street
        setValue('bairro', address.neighborhood);  // neighborhood
        setValue('cidade', address.city);  // city
      } else {
        console.log("Endereço não encontrado.");
      }
    }
  }

  const onSubmit = data => {
    console.log(data);
  };

  const [socialFields, setSocialFields] = useState([{ id: 1, value: '' }]);

  return (
    <S.Container>
      <Sidebar showSteps={true} forceTopBar={true} />
      <S.TopLeftLink to="/register">
        <BsChevronBarLeft size={20} /> Anterior
      </S.TopLeftLink>

      <S.Section ref={section1Ref}>
        <S.FormContainer>
          <h2>Cadastre suas Informações</h2>
          <S.FormsWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
              <S.GridContainer>
                <S.FormGroup>
                  <label>Nome Completo</label>
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    {...register('name', { required: 'Por favor, Digite seu nome' })}
                  />
                  {errors.name && <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>}
                </S.FormGroup>

                <S.FormGroup>
                  <label>CPF</label>
                  <input
                    type="text"
                    placeholder="000.000.000-00"
                    {...register('CPF', {
                      required: 'CPF é obrigatório',
                      pattern: { value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, message: 'CPF inválido' }
                    })}
                    ref={withMask('999.999.999-99')}
                  />
                  {errors.CPF && <S.ErrorMessage>{errors.CPF.message}</S.ErrorMessage>}
                </S.FormGroup>

                <S.FormGroup>
                  <label>Telefone</label>
                  <input
                    type="text"
                    placeholder="(99) 99999-9999"
                    {...register('telefone', {
                      required: 'Telefone é obrigatório',
                      pattern: { value: /^\(\d{2}\) \d{4,5}-\d{4}$/, message: 'Telefone inválido' }
                    })}
                    ref={withMask('(99) 99999-9999')}
                  />
                  {errors.telefone && <S.ErrorMessage>{errors.telefone.message}</S.ErrorMessage>}
                </S.FormGroup>

                <S.FormGroup>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="exemplo@email.com"
                    {...register('email', {
                      required: 'Email é obrigatório',
                      pattern: { value: /^\S+@\S+\.\S+$/, message: 'Email inválido' }
                    })}
                  />
                  {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
                </S.FormGroup>

                <S.FormGroup>
                  <label>CEP</label>
                  <input
                    type="text"
                    placeholder="00000-000"
                    {...register('cep', {
                      required: 'CEP é obrigatório',
                      pattern: { value: /^\d{5}-\d{3}$/, message: 'CEP inválido' }
                    })}
                    ref={withMask('99999-999')}
                    onBlur={handleZipcodeBlur}
                  />
                  {errors.cep && <S.ErrorMessage>{errors.cep.message}</S.ErrorMessage>}
                </S.FormGroup>

                <S.AddressGroup>
                  <div>
                    <label>Endereço</label>
                    <input 
                      type="text" 
                      placeholder="Endereço" 
                      value={address.street} 
                      readOnly 
                      {...register('endereco')} 
                    />
                  </div>
                  <div>
                    <label>Número</label>
                    <input
                      type="text"
                      placeholder="Número"
                      {...register('numero', {
                        required: 'Número é obrigatório',
                        pattern: { value: /^\d+$/, message: 'Somente números' }
                      })}
                    />
                    {errors.numero && <S.ErrorMessage>{errors.numero.message}</S.ErrorMessage>}
                  </div>
                </S.AddressGroup>

                <S.FormGroup>
                  <label>Bairro</label>
                  <input 
                    type="text" 
                    placeholder="Bairro" 
                    value={address.neighborhood} 
                    readOnly 
                    {...register('bairro')} 
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Cidade</label>
                  <input 
                    type="text" 
                    placeholder="Cidade" 
                    value={address.city} 
                    readOnly 
                    {...register('cidade')} 
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Complemento</label>
                  <input type="text" placeholder="Complemento" {...register('complemento')} />
                </S.FormGroup>

                <SocialFields socialFields={socialFields} setSocialFields={setSocialFields} />
              </S.GridContainer>
            </form>
          </S.FormsWrapper>
        </S.FormContainer>
      </S.Section>

      <S.Section ref={section2Ref}>
        <TrainingPage />
        <h2>Informe suas habilidades</h2>
        <form method="post">
          <S.Textbox
            className="caixa-habilidades"
            name="habilidades"
            placeholder="Faça uma breve descrição de suas habilidades"
          />
        </form>
      </S.Section>

      <S.Section ref={section3Ref}>
        aaaaaaaaaaaaaaaaaa
      </S.Section>
    </S.Container>
  );
};

export default Prestador;

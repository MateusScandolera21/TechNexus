import React from 'react';
import { BsDash, BsPlus } from 'react-icons/bs';
import * as S from './SocialStyles';

const SocialFields = ({ socialFields, setSocialFields }) => {
  // Função para adicionar um novo campo de rede social
  const handleAddSocialField = () => {
    const newField = { id: Date.now(), value: '' }; // Usando timestamp como ID único
    setSocialFields([...socialFields, newField]);
  };

  // Função para remover um campo de rede social
  const handleRemoveSocialField = (id) => {
    if (socialFields.length > 1) {
      setSocialFields(socialFields.filter((field) => field.id !== id));
    }
  };

  // Função para atualizar o valor de um campo de rede social
  const handleSocialFieldChange = (id, value) => {
    const updatedFields = socialFields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setSocialFields(updatedFields);
  };

  return (
    <>
      {socialFields.map((field, index) => (
        <S.FormGroup key={field.id}>
          <label>{index === 0 ? 'Rede Social (Opcional)' : 'Outra Rede Social (Opcional)'}</label>
          <S.InputContainer>
            <input
              type="text"
              placeholder="Outra Rede Social (Opcional)"
              value={field.value}
              onChange={(e) => handleSocialFieldChange(field.id, e.target.value)}
            />
            {socialFields.length > 1 && (
              <S.IconWrapper onClick={() => handleRemoveSocialField(field.id)}>
                <BsDash size={15} />
              </S.IconWrapper>
            )}
            {index === socialFields.length - 1 && (
              <S.IconWrapper onClick={handleAddSocialField}>
                <BsPlus size={15} />
              </S.IconWrapper>
            )}
          </S.InputContainer>
        </S.FormGroup>
      ))}
    </>
  );
};

export default SocialFields;
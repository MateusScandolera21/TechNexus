import React, { useState } from 'react';
import * as S2 from './TrainingStyle'; 
import { BsPlus, BsDash } from 'react-icons/bs';

const Training = ({ title, index, addTraining, removeTraining, selectIdPrefix }) => (
  <S2.TrainingContainer key={index}>
    <h2>{title}</h2>

    <S2.SelectContainer>
      <select id={`${selectIdPrefix}-course-${index}`} name={`${selectIdPrefix}-course-${index}`}>
        <option value="">-- Escolha um curso --</option>
      </select>
    </S2.SelectContainer>

    <S2.FormGroup>
      <input placeholder="-- Instituição --" />
    </S2.FormGroup>

    <S2.AddressGroup>
      <select>
        <option value="" disabled selected>Início</option>
          {Array.from({ length: 80 }, (_, i) => {
            const year = new Date().getFullYear() - 50 + i;
            return <option key={year} value={year}>{year}</option>;
          })}
      </select>

      <select>
      <option value="" disabled selected>Conclusão</option>
        {Array.from({ length: 80 }, (_, i) => {
          const year = new Date().getFullYear() - 50 + i;
          return <option key={year} value={year}>{year}</option>;
        })}
      </select>
    </S2.AddressGroup>

    <S2.ButtonContainer>
      <S2.ButtonAdd onClick={addTraining}><BsPlus size={20} /> Adicionar</S2.ButtonAdd>
      <S2.ButtonRemove onClick={() => removeTraining(index)}><BsDash size={20} /> Remover</S2.ButtonRemove>
    </S2.ButtonContainer>
    
  </S2.TrainingContainer>
);

const FormacaoPage = () => {
  const [academicTrainings, setAcademicTrainings] = useState([{}]); 
  const [additionalTrainings, setAdditionalTrainings] = useState([{}]); 

  // Adiciona uma nova Formação Acadêmica
  const addAcademicTraining = () => {
    setAcademicTrainings([...academicTrainings, {}]);
  };

  // Adiciona um novo Curso Adicional
  const addAdditionalTraining = () => {
    setAdditionalTrainings([...additionalTrainings, {}]);
  };

  // Remove um formulário de Formação Acadêmica
  const handleRemoveAcademicTraining = (index) => {
    if (academicTrainings.length > 1) {
      setAcademicTrainings(academicTrainings.filter((_, i) => i !== index));
    }
  };

  // Remove um formulário de Curso Adicional
  const handleRemoveAdditionalTraining = (index) => {
    if (additionalTrainings.length > 1) {
      setAdditionalTrainings(additionalTrainings.filter((_, i) => i !== index));
    }
  };

  return (  
    <S2.FormContainer>
      {/* Grid para Formação Acadêmica */}
      <S2.TrainingSection>
        {academicTrainings.map((_, index) => (
          <Training
            key={index}
            title="Formação Acadêmica"
            index={index}
            addTraining={addAcademicTraining}
            removeTraining={handleRemoveAcademicTraining}
            selectIdPrefix="academic"
          />
        ))}
      </S2.TrainingSection>

      {/* Grid para Cursos Adicionais */}
      <S2.TrainingSection>
        {additionalTrainings.map((_, index) => (
          <Training
            key={index}
            title="Curso Adicional"
            index={index}
            addTraining={addAdditionalTraining}
            removeTraining={handleRemoveAdditionalTraining}
            selectIdPrefix="additional"
          />
        ))}
      </S2.TrainingSection>
    </S2.FormContainer>
  );
};

export default FormacaoPage;

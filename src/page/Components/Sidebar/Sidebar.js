import { BsCheck2  } from "react-icons/bs";
import React from 'react';
import './styles.css';
import ImgLogo from '../../img/Ativo 1.svg';

function Sidebar({ currentStep, alwaysCompleteFirstStep}) {

  // Define as classes de etapas ativas e completas
  const getStepClass = (index) => {
    if (index === 0 && alwaysCompleteFirstStep) return 'circle completed';
    if (index < currentStep) return 'circle completed';
    if (index === currentStep) return 'circle active';
    return 'circle';
  };

  // Lógica para mostrar o ícone de verificação
  const getIconVisibility = (index) => {
    // O ícone só aparece em etapas concluídas
    if (index < currentStep || (index === 0 && alwaysCompleteFirstStep)) {
      return <BsCheck2 className="check-icon" />;
    }
    return null; // Não exibe o ícone nas etapas ativas ou futuras
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={ImgLogo} alt="TechNexus Logo" className="logo-image" />
      </div>
      <div className="stepContainer">
        {[...Array(5)].map((_, index) => (
          <div className="step" key={index}>
            <div className={getStepClass(index)}>
              {/* Exibe o ícone de verificação para etapas concluídas */}
              {getIconVisibility(index)}
              {/* Exibe o círculo interno na etapa atual */}
              {index === currentStep && <div className="inner-circle"></div>}
            </div>
            <span className="step-number">Etapa {index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

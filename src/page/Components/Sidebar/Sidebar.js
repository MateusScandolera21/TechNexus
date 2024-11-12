import { BsCheck2Circle } from "react-icons/bs";
import React from 'react';
import './styles.css';

function Sidebar({ currentStep }) {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>TechNexus</h1>
      </div>
      <div className="stepContainer">
        {[...Array(5)].map((_, index) => (
          <div className="step" key={index}>
            <div className={`circle ${index < currentStep ? 'completed' : ''} ${index === currentStep ? 'active' : ''}`}>
              {/* Exibe o ícone BsCheck2 se a etapa estiver concluída */}
              {index < currentStep ? <BsCheck2Circle  className="check-icon" /> : null}
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

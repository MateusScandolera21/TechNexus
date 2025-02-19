// Sidebar.jsx
import React from 'react';
import './styles.css';
import ImgLogo from '../../img/Technexus-02.svg';
import Step from '../Step/Step'; // Importa o componente Step

/* <Sidebar showSteps={false} /> Usar quando não quiser mostrar os Stap */

const Sidebar = ({ currentStep, alwaysCompleteFirstStep, showSteps = true }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={ImgLogo} alt="TechNexus Logo" className="logo-image" />
      </div>

      {/* Condicional para exibir o texto apenas quando showSteps for false */}
      {!showSteps && (
        <div className="Text-Principal">
          <h2>Oportunidades de Crescimento Profissional</h2>
        </div>
      )}

      {/* Exibe os passos somente se showSteps for true*/}
      {showSteps && (
        <div className="stepContainer">
          {[...Array(5)].map((_, index) => (
            <Step
              key={index}
              index={index}
              currentStep={currentStep}
              alwaysCompleteFirstStep={alwaysCompleteFirstStep}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;

import React from 'react';
import './styles.css'

function Sidebar({ currentStep }) {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>TechNexus</h1>
      </div>
      <div className="stepContainer">
        {[...Array(5)].map((_, index) => (
          <div className="step" key={index}>
            <div className={`circle ${index <= currentStep ? 'active' : ''}`}>
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

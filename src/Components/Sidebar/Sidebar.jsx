import React from 'react';
import './styles.css';
import ImgLogo from '../../img/Technexus-02.svg';

const Sidebar = ({ showSteps = false }) => {
  return (
    <div className={`sidebar ${showSteps ? 'top-bar' : ''}`}>
      {/* Logo */}
      <div className="logo-bar">
        <img src={ImgLogo} alt="TechNexus Logo" className="logo-image" />
      </div>

      {/* Texto Principal */}
      {!showSteps && (
        <div className="Text-Principal">
          <h2>Oportunidades de Crescimento Profissional</h2>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
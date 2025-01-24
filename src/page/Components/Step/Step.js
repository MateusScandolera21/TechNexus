import React from 'react';
import { BsCheck2 } from "react-icons/bs";
import './Styles.css';

function Step({ index, currentStep, alwaysCompleteFirstStep }) {
  const getStepClass = () => {
    if (index === 0 && alwaysCompleteFirstStep) return 'circle completed';
    if (index < currentStep) return 'circle completed';
    if (index === currentStep) return 'circle active';
    return 'circle';
  };

  const getIconVisibility = () => {
    if (index < currentStep || (index === 0 && alwaysCompleteFirstStep)) {
      return <BsCheck2 className="check-icon" />;
    }
    return null;
  };

  return (
    <div className="step">
      <div className={getStepClass()}>
        {getIconVisibility()}
        {index === currentStep && <div className="inner-circle"></div>}
      </div>
      <span className="step-number">Etapa {index + 1}</span>
    </div>
  );
}

export default Step;


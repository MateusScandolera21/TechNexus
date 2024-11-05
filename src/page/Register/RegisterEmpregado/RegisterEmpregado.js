import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';

const ClientePage = () => {
  // Estado para armazenar a seção atual
  const [currentSection, setCurrentSection] = useState(0);

  // Lista das seções do formulário
  const sections = [
    <Section1 />,
    <Section2 />,
    <Section3 />,
    <Section4 />,
  ];

  // Manipula a rolagem do mouse para ir para a próxima ou a seção anterior
  const handleScroll = (event) => {
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else if (event.deltaY < 0 && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  // Adiciona o evento de scroll quando o componente é montado
  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSection]);

  // Manipula o clique no botão "Próximo"
  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  // Manipula o clique no botão "Anterior"
  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };
}

export default ClientePage
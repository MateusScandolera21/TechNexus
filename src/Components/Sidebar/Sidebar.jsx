import React from 'react';
import { useMediaQuery } from 'react-responsive';
import * as S from './SidebarStyles';
import logo from '../../img/Technexus-02.svg';

const Sidebar = ({ showSteps, forceTopBar }) => {
  const isTopBar = useMediaQuery({ maxWidth: 1000 });

  // Se forceTopBar for true, ativa a TopBar independentemente do tamanho da tela
  const shouldShowTopBar = forceTopBar || isTopBar;
  /*
  <Sidebar showSteps={true} forceTopBar={true} />

  (TopBar só em telas menores que 1000px) 
  <Sidebar showSteps={true} forceTopBar={false} />
  */

  return (
    <S.SidebarContainer className={shouldShowTopBar ? 'top-bar' : ''}>
      <S.LogoBar isTopBar={shouldShowTopBar}>
        <S.LogoImage src={logo} alt="Logo" isTopBar={shouldShowTopBar} />
      </S.LogoBar>
      {!shouldShowTopBar && (
        <S.TextPrincipal>
          Oportunidades de Crescimento Profissional
        </S.TextPrincipal>
      )}
    </S.SidebarContainer>
  );
};

export default Sidebar;
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  background-color: #33685A;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
  width: 25%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  &.top-bar {
    background-color: #33685A;
    height: 100px;
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px 20px;
    width: 100%;
    z-index: 1000;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 80px;
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px 20px;
    z-index: 1000;
  }
`;

export const LogoBar = styled.div`
  margin-bottom: ${(props) => (props.isTopBar ? '0' : '10rem')};
  display: flex;
  justify-content: center;
  width: ${(props) => (props.isTopBar ? 'auto' : '100%')};
  margin-left: ${(props) => (props.isTopBar ? '90px' : '0')};

  @media (max-width: 1024px) {
    margin-bottom: 0;
    width: auto;
    margin-left: 20px;
  }
`;

export const LogoImage = styled.img`
  width: 100%;
  max-width: ${(props) => (props.isTopBar ? '150px' : '500px')};
  height: auto;
  margin-top: ${(props) => (props.isTopBar ? '0' : '10rem')};

  @media (max-width: 1024px) {
    max-width: 150px;
    margin-top: 0;
  }
`;

export const TextPrincipal = styled.h2`
  color: #dbd8d8;
  font-size: 2.1rem;
  font-weight: 700;
  line-height: 46px;
  text-align: left;
  width: 100%;
  max-width: 274px;
  margin: 0;

  @media (max-width: 1024px) {
    display: none; /* Oculta o texto em telas menores */
  }
`;
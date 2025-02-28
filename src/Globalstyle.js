import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: #FAF9F9;
    color: #333;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 0.5vw;
  }

  ::-webkit-scrollbar-track {
    background-color: #FAF9F9;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #33685A;
    border-radius: 10px;
  }
`;

export default GlobalStyle;
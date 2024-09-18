import React from 'react';
import GlobalStyle from './styles/Global';
import RoutesApp from './routes';
import { AuthProvider } from './context/auth';
function App() {
  return (
    <>
    <AuthProvider>
      <RoutesApp  />
      <GlobalStyle />
    </AuthProvider>
    </>
  );
}

export default App;

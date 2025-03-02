import Login from './page/Login/Login';
import Home from './page/Home/Home';
import GlobalStyle from './Globalstyle';
import RegisterPage  from './page/Register/RegisterPage';
import ContratantePage from './page/Register/Contratante/ContratantePage';
import PrestadorPage from './page/Register/Prestador/PrestadorPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contratante" element={<ContratantePage />} />
        <Route path="/prestador" element={<PrestadorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

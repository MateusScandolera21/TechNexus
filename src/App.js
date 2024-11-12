import './App.css';
import Home from './page/Home/Home';
import RegisterPage  from './page/Register/RegisterPage';
import ContratantePage from './page/Register/Contratante/ContratantePage';
import PrestadorPage from './page/Register/Prestador/PrestadorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/pagina-contratante" element={<ContratantePage />} />
        <Route path="/pagina-prestador" element={<PrestadorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

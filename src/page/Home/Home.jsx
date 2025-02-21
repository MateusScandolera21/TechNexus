import { React } from 'react';
import './Styles.css';
import { Link } from 'react-router-dom';

import logo from '../../img/Technexus-04.svg';
import logotxt from '../../img/Technexus-03.svg';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import Button from '../../Components/button/button'


const Home = () => {

  return (
    <div className='home-container'>

      {/* Logo superior */}
      <div className='logo-superior'>
        <img src={logo} alt='Tech Nexus logo' className='logo' />
      </div>

      {/* Botão no canto superior direito */}
      <Link to="/login" className="botao-superior-direito">
        <Button text="Entrar" variant="primary"/>
      </Link>
      
      <div className='txt-principal'>

        <img src={logotxt} alt='Tech Nexus' className='logo-txt-info' />

        <p>
        Aqui, networking é mais do que um encontro de interesses; 
        é a fundação para as inovações que transformam o mundo. 
        Quando talentos e conhecimentos se unem, o impossível torna-se 
        possível. Somos a ponte que conecta talentos, o catalisador que 
        promove o crescimento, e a plataforma que facilita o progresso. 
        </p>
      </div>

      <div className="linha"></div>

      <div className='logo-inferior'>
        <img src={logo} alt='Tech Nexus logo' className='logo-inf' />
      </div>

      {/* Ícones das redes sociais */}
      <div className="icones-redes-sociais">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <BsFacebook size={20} className="icone-facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <BsInstagram size={20} className="icone-instagram" />
        </a>
      </div>
      

    </div>
  );
};

export default Home;

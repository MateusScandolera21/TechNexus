import { React } from 'react';
import './Styles.css';
import { Link } from 'react-router-dom';

import logo from '../../img/Technexus-04.svg';
import logotxt from '../../img/Technexus-03.svg';


const Home = () => {

  return (
    <div className='home-container'>

      {/* Logo superior */}
      <div className='logo-superior'>
        <img src={logo} alt='Tech Nexus logo' className='logo' />
      </div>
      
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

      <div className='login'>
        
      </div>

    </div>
  );
};

export default Home;

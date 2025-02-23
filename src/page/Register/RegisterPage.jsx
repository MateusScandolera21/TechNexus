import React, { useState } from "react";
import './Register.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Button from '../../Components/button/button';
import ButtonContainer from "../../Components/InputContainer/InputContainer";

import { BsChevronBarLeft } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { BsEnvelope, BsLock } from "react-icons/bs";

function RegisterPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Função para validar os campos
  const validateFields = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "O email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email inválido";
    }

    if (!password) {
      newErrors.password = "A senha é obrigatória";
    } else if (password.length < 6) {
      newErrors.password = "A senha deve ter pelo menos 6 caracteres";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirme sua senha";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "As senhas devem ser iguais";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true se não houver erros
  };

  // Função chamada ao clicar no botão "Próximo"
  const handleNext = () => {
    const isValid = validateFields();

    if (!isValid) {
      return; // Não prossegue se houver erros
    }

    if (!selectedOption) {
      alert("Por favor, selecione uma opção para continuar.");
      return;
    }

    // Redireciona com base na opção selecionada
    if (selectedOption === "contratante") {
      navigate('/contratante');
    } else if (selectedOption === "prestador") {
      navigate("/prestador");
    }
  };

  return (
    <div className="register-container">
      {/* Sidebar */}
      <Sidebar showSteps={true} />

      <div className="main">
        
        <div className='header-container'>
          {/* Link Voltar para Página Inicial */}
          <Link to="/login" className="top-left"><BsChevronBarLeft size={20} /> Página Inicial</Link>

          {/* Botão Entrar */}
          <div className="top-right">
            <p>Já possui uma conta? </p>
            <Link to="/login" className="Login-button">Entrar</Link>
          </div>

        </div>
        {/* Container dos dois formulários */}
        <div className="form-container">
          
          {/* Formulário e opções lado a lado */}
          <div className="login-cadastro">
            {/* Formulário de Login */}
            <div className="test1">

              <h2>Cadastra-se</h2>
              <p>INSIRA O EMAIL E CRIE A SENHA PARA CONTINUAR</p>

              <form>
                {/* Campo de Email */}
                <ButtonContainer
                  type="email"
                  icon={BsEnvelope}
                  placeholder="Digite seu email"
                  onChange={(e) => setEmail(e.target.value)} // Passa o onChange
                  value={email} // Passa o valor
                />
                {errors.email && <p className="labelError">{errors.email}</p>}

                {/* Campo de Senha */}
                <ButtonContainer
                  type="password"
                  icon={BsLock}
                  placeholder="Digite sua senha"
                  isPasswordVisible={isPasswordVisible}
                  onTogglePasswordVisibility={() => setIsPasswordVisible(!isPasswordVisible)}
                  onChange={(e) => setPassword(e.target.value)} // Passa o onChange
                  value={password} // Passa o valor
                />
                {errors.password && <p className="labelError">{errors.password}</p>}

                {/* Campo de Confirmar Senha */}
                <ButtonContainer
                  type="password"
                  icon={BsLock}
                  placeholder="Confirme sua senha"
                  isPasswordVisible={isPasswordVisible}
                  onTogglePasswordVisibility={() => setIsPasswordVisible(!isPasswordVisible)}
                  onChange={(e) => setConfirmPassword(e.target.value)} // Passa o onChange
                  value={confirmPassword} // Passa o valor
                />
                {errors.confirmPassword && <p className="labelError">{errors.confirmPassword}</p>}
              </form>
            </div>

            {/* Opções de seleção */}
            <div className="test2">
              <h2>Gostaria de se Cadastrar como:</h2>
              <div className="container-option">
                <div className="option">
                  <input
                    type="radio"
                    id="input1"
                    name="options"
                    value="contratante"
                    checked={selectedOption === "contratante"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <label htmlFor="input1">CONTRATANTE</label>          
                </div>

                <div className="option group-options">
                  <div className="option">
                    <input
                      type="radio"
                      id="option2"
                      name="options"
                      value="prestador"
                      checked={selectedOption === "prestador"}
                      onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    <label htmlFor="option2">PROFISSIONAL</label>
                  </div>
                </div>
              </div>

              {/* Botão Próximo */}
              <div className="button-login">
                <Button 
                  onClick={handleNext}
                  text="Próximo" 
                  disabled={!email || !password || !confirmPassword || !selectedOption} // Desabilita o botão se os campos não estiverem preenchidos ou se nenhuma opção estiver selecionada
                />
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
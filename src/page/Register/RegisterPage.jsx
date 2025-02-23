import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BsChevronBarLeft, BsEnvelope, BsLock } from "react-icons/bs";
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import Sidebar from "../../Components/Sidebar/Sidebar";
import * as S from './RegisterStyles';

function RegisterPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    const isValid = validateFields();

    if (!isValid) {
      return;
    }

    if (!selectedOption) {
      alert("Por favor, selecione uma opção para continuar.");
      return;
    }

    if (selectedOption === "contratante") {
      navigate('/contratante');
    } else if (selectedOption === "prestador") {
      navigate("/prestador");
    }
  };

  return (
    <S.RegisterContainer>
      
      <Sidebar showSteps={true} forceTopBar={true}/>

      <S.HeaderContainer>

          <S.BackLink to="/login">
            <BsChevronBarLeft size={20} /> Página Inicial
          </S.BackLink>

          <S.LoginLinkContainer>
            <p>Já possui uma conta? </p>
            <Link to="/login" className="loginButton">Entrar</Link>
          </S.LoginLinkContainer>
          
      </S.HeaderContainer>

      <S.MainContent>
        <S.FormWrapper>
          <S.FormContainer>
            
            <S.FormColumn>
              <h2>Cadastra-se</h2>
              <S.FormMessage>INSIRA O EMAIL E CRIE A SENHA PARA CONTINUAR</S.FormMessage>

              <form>
                <Input
                  type="email"
                  icon={BsEnvelope}
                  placeholder="Digite seu email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {errors.email && <S.ErrorMessage>{errors.email}</S.ErrorMessage>}

                <Input
                  type="password"
                  icon={BsLock}
                  placeholder="Digite sua senha"
                  isPasswordVisible={isPasswordVisible}
                  onTogglePasswordVisibility={() => setIsPasswordVisible(!isPasswordVisible)}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {errors.password && <S.ErrorMessage>{errors.password}</S.ErrorMessage>}

                <Input
                  type="password"
                  icon={BsLock}
                  placeholder="Confirme sua senha"
                  isPasswordVisible={isPasswordVisible}
                  onTogglePasswordVisibility={() => setIsPasswordVisible(!isPasswordVisible)}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
                {errors.confirmPassword && <S.ErrorMessage>{errors.confirmPassword}</S.ErrorMessage>}
              </form>
            </S.FormColumn>

            <S.OptionsColumn>
              <h2>Gostaria de se Cadastrar como:</h2>
              <S.OptionsContainer>
                <S.OptionItem>
                  <input
                    type="radio"
                    id="input1"
                    name="options"
                    value="contratante"
                    checked={selectedOption === "contratante"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <label htmlFor="input1">CONTRATANTE</label>
                </S.OptionItem>

                <S.OptionItem>
                  <input
                    type="radio"
                    id="option2"
                    name="options"
                    value="prestador"
                    checked={selectedOption === "prestador"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <label htmlFor="option2">PROFISSIONAL</label>
                </S.OptionItem>
              </S.OptionsContainer>

              <S.ButtonContainer>
                <Button
                  onClick={handleNext}
                  text="Próximo"
                  disabled={!email || !password || !confirmPassword || !selectedOption}
                />
              </S.ButtonContainer>
            </S.OptionsColumn>

          </S.FormContainer>
        </S.FormWrapper>
      </S.MainContent>
    </S.RegisterContainer>
  );
}

export default RegisterPage;
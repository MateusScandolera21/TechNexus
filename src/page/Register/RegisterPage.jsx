import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BsChevronBarLeft, BsEnvelope, BsLock } from "react-icons/bs";
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import Sidebar from "../../Components/Sidebar/Sidebar";
import * as S from './RegisterStyles';
import axios from 'axios';

function RegisterPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [cadastroEmail, setCadastroEmail] = useState("");
  const [cadastroSenha, setCadastroSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [tipoUsuarioId, setTipoUsuarioId] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [areasTI, setAreasTI] = useState("");
  const [areaSelecionada, setAreaSelecionada] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Busca as areas de TI do backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/areas-ti')
      .then(response => setAreasTI(response.data))
      .catch(error => console.error(error));
  }, []);

  const validateFields = () => {
    const newErrors = {};

    if (!cadastroEmail) {
      newErrors.cadastroEmail = "O email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(cadastroEmail)) {
      newErrors.cadastroEmail = "Email inválido";
    }

    if (!cadastroSenha) {
      newErrors.cadastroSenha = "A senha é obrigatória";
    } else if (cadastroSenha.length < 6) {
      newErrors.cadastroSenha = "A senha deve ter pelo menos 6 caracteres";
    }

    if (!confirmarSenha) {
      newErrors.confirmarSenha = "Confirme sua senha";
    } else if (confirmarSenha !== cadastroSenha) {
      newErrors.confirmarSenha = "As senhas devem ser iguais";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true se não houver erros
  };

  const cadastrarUsuario = async () => {
    // Valida os campos obrigatorios
    if (!cadastroEmail || !cadastroSenha || !confirmarSenha) {
      setMensagem("Preencha todos os campos");
      return;
    }

    // Validacao do formato do email
    if (!validateFields(cadastroEmail)) {
      setMensagem ('O e-mail deve ter o formato "usuario@example.com"');
    }

    // Validacao da senha
    if (!validateFields(cadastroSenha)) {
      setMensagem('A senha deve ter entre 8 e 16 caracteres');
      return;
    }

    // Validacao da confirmacao de senha
    if (cadastroSenha !== confirmarSenha) {
      setMensagem('As senhas nao coincidem');
      return;
    }

    // Validacao da area de TI (apenas para Prestador)
    if (tipoUsuarioId === 2 && !areaSelecionada) {
      setMensagem('Selecione uma area de TI');
      return;
    }

    // Envia os dados para o backend
    try {
      const response = await axios.post('http://localhost:5000/api/usuarios', {
        email: cadastroEmail,
        senha: cadastroSenha,
        confirmarSenha: confirmarSenha,
        tipoUsuarioId: tipoUsuarioId === 2 ? areaSelecionada : null // Envia o D da area de TI apenas para prestador
      });
      setMensagem(`Usuario cadastrado com sucesso: ${response.data.usuario.email}`);
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data.message) {
        setMensagem(error.response.data.message); // Exibe a mensagem de erro do backend
      }
    }
  };

  const handleNext = async () => { // Adicionado async
    const isValid = validateFields();
  
    if (!isValid) {
      return; // Não prossegue se houver erros
    }
  
    if (!selectedOption) {
      alert("Por favor, selecione uma opção para continuar.");
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/api/usuarios', {
        email: cadastroEmail,
        senha: cadastroSenha,
        confirmarSenha: confirmarSenha,
        tipoUsuarioId: tipoUsuarioId, // Envia o ID do tipo de usuário
        areaTIId: tipoUsuarioId === 2 ? areaSelecionada : null, // Envia o ID da área de TI apenas para Prestador
      });
  
      setMensagem(`Usuário cadastrado com sucesso: ${response.data.usuario.email}`);
  
      // Redireciona com base no tipo de usuário
      if (selectedOption === "contratante") {
        navigate('/contratante');
      } else if (selectedOption === "prestador") {
        navigate('/prestador');
      } else {
        navigate('/login'); // Redireciona para a página de login como fallback
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setMensagem(error.response.data.message); // Exibe a mensagem de erro do backend
      } else {
        setMensagem('Erro ao cadastrar usuário');
      }
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
                  value={cadastroEmail}
                  onChange={(e) => setCadastroEmail(e.target.value)}
                />
                {errors.email && <S.ErrorMessage>{errors.email}</S.ErrorMessage>}

                <Input
                  type="password"
                  icon={BsLock}
                  placeholder="Digite sua senha"
                  isPasswordVisible={isPasswordVisible}
                  onTogglePasswordVisibility={() => setIsPasswordVisible(!isPasswordVisible)}
                  value={cadastroSenha}
                  onChange={(e) => setCadastroSenha(e.target.value)}
                />
                {errors.password && <S.ErrorMessage>{errors.password}</S.ErrorMessage>}

                <Input
                  type="password"
                  icon={BsLock}
                  placeholder="Confirme sua senha"
                  isPasswordVisible={isPasswordVisible}
                  onTogglePasswordVisibility={() => setIsPasswordVisible(!isPasswordVisible)}
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
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
                  disabled={!cadastroEmail || !cadastroSenha || !confirmarSenha || !selectedOption}
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
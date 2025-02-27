require('dotenv').config(); // Carrega as variáveis do arquivo .env

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const { hashPassword, comparePassword } = require('./authUtils.js'); // Importa as funções

const app  = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuração do PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Rota para cadastrar um usuário
app.post('/api/usuarios', async (req, res) => {
  const { email, senha, confirmarSenha } = req.body;

  // Validação do email
  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  if (!validarEmail(email)) {
    return res.status(400).json({ message: 'Insira um email válido' });
  }

  try {
    // Verifica se o email já está cadastrado
    const usuarioExistente = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);

    if (usuarioExistente.rows.length > 0) {
      return res.status(400).json({ message: 'Email já cadastrado' });
    }

    // Validação da senha
    const validarSenha = (senha) => {
      return senha.length >= 8 && senha.length <= 16; // Verifica se a senha tem entre 8 e 16 caracteres
    };

    if (!validarSenha(senha)) {
      return res.status(400).json({ message: 'A senha deve ter entre 8 e 16 caracteres' });
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
      return res.status(400).json({ message: 'As senhas não coincidem' });
    }

    // Gera o hash da senha
    const senhaHash = await hashPassword(senha);

    // Insere o usuário no banco de dados
    const { rows } = await pool.query(
      'INSERT INTO usuarios (email, senha) VALUES ($1, $2) RETURNING *',
      [email, senhaHash]
    );

    res.status(201).json({ message: 'Usuário cadastrado com sucesso', usuario: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao cadastrar usuário' });
  }
});

// Rota para buscar áreas de TI
app.get('/api/areas-ti', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM areas_ti');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar áreas de TI');
  }
});

// Rota para fazer login
app.post('/api/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Busca o usuário pelo email
    const { rows } = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);

    if (rows.length === 0) {
      return res.status(404).send('Usuário não encontrado');
    }

    const usuario = rows[0];

    // Compara a senha fornecida com o hash armazenado
    const senhaValida = await comparePassword(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).send('Senha incorreta');
    }

    // Se a senha estiver correta, retorna o usuário (ou um token JWT, por exemplo)
    res.json({ message: 'Login bem-sucedido', usuario });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao fazer login');
  }
});

// Rota para buscar vagas por área de TI
app.get('/api/vagas', async (req, res) => {
  const { areaTIId } = req.query; // Recebe o ID da área de TI como query parameter

  try {
    let query = 'SELECT * FROM vagas';
    let params = [];

    // Filtra por área de TI, se o ID for fornecido
    if (areaTIId) {
      query += ' WHERE area_ti_id = $1';
      params.push(areaTIId);
    }

    const { rows } = await pool.query(query, params);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar vagas');
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
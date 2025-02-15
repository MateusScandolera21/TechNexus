const express = require('express');
const cors = require('cors');
const { testConnection, pool } = require('./db');

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: 'Olá, mundo do back-end'});
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

app.get('/api/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users'); // Faz uma consulta SQL
        res.json(result.rows); // Enviando os dados de volta para o front-end
    } catch (err) {
        console.error('Erro ao buscar usuários: ', err);
        res.status(500).json({ error: 'Erro ao buscar usuários'});
    }
});
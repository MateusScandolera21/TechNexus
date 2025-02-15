require ('dotenv').config(); // Carrega as variáveis do .env

const { Pool } = require('pg'); // Importa o pool do pg para gerenciar conexões com o banco

// Configurações da conexão com o banco
const pool = new Pool({
    user    : process.env.DB_USER    ,
    host    : process.env.DB_HOST    ,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port    : process.env.DB_PORT    ,
});

// Função para testar a conexão com o banco
const testConnection = async () => {
    try {
        await pool.connect();
        console.log('Conexão com o banco estabelecida com sucesso!');
    } catch (err) {
        console.error('Erro ao conectaro ao banco de dados: ', err);
    }
};

module.exports = { pool, testConnection };
const bcrypt = require('bcrypt');

// Função para gerar o hash da senha
async function hashPassword(senha) {
  const saltRounds = 10; // Número de rounds para gerar o salt
  const hash = await bcrypt.hash(senha, saltRounds);
  return hash;
}

// Função para comparar a senha com o hash armazenado
async function comparePassword(senha, hash) {
  const match = await bcrypt.compare(senha, hash);
  return match; // Retorna true se a senha corresponder ao hash
}

// Exporta as funções
module.exports = {
  hashPassword,
  comparePassword,
};
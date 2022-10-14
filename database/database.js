const Sequelize = require("sequelize");


// Na ordem: nome do banco, usuário, senha, e host e dialeto do banco de dados
const connection = new Sequelize('formacaonode','node','22335569',{
    host:'localhost',
    dialect: 'mysql'
});


module.exports = connection;
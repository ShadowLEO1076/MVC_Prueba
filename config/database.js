// config/sequelize.js
const { Sequelize } = require('sequelize');
const dbConfig = require('./dbconfig');

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: 'mysql'
  }
);

module.exports = sequelize;

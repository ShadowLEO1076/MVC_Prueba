const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserTeam = sequelize.define('UserTeam', {
  // Si quieres campos extra, puedes agregarlos aquí
  fechaIngreso: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'user_equipos',
  timestamps: false
});

module.exports = UserTeam;
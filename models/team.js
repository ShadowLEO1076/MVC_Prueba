const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

//equipo al que un user se puede unir
const Equipo = sequelize.define('Equipo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ciudad: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'equipos',
  timestamps: false
});

module.exports = Equipo;

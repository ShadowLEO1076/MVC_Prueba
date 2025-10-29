const User = require('./user');
const Equipo = require('./team');
const UserTeam = require('./userTeam');
// Relación muchos a muchos:
User.belongsToMany(Equipo, {
  through: 'UserTeam', // nombre de la tabla intermedia
  foreignKey: 'userId',
  otherKey: 'equipoId'
});

Equipo.belongsToMany(User, {
  through: 'UserTeam',
  foreignKey: 'equipoId',
  otherKey: 'userId'
});
//en teoría, permite que todo suceda de manera automática
module.exports = { User, Equipo, UserTeam };

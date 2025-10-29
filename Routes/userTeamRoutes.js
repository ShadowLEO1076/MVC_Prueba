const express = require("express");
const router = express.Router();
const userTeamController = require ("../controllers/userTeamController");

router.post("/users/:userId/team/:equipoId", userTeamController.save);
// Listar equipos de un usuario
router.get('/users/:userId/equipos', userTeamController.listarEquiposDeUsuario);

// Listar usuarios de un equipo
router.get('/equipos/:equipoId/users', userTeamController.listarUsuariosDeEquipo);

module.exports = router;
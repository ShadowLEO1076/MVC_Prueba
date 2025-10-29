const express = require('express');
const teamController = require('../controllers/teamController');

const router = express.Router();
router.get('/',  teamController.getUsers);
router.post('/save', teamController.saveUser);
router.get("/:id",teamController.getUserById);
router.put("/:id", teamController.updateUser);
router.delete("/:id",teamController.deleteUser);

module.exports = router;

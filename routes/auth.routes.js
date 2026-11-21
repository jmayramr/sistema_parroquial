const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');

// Ruta para mostrar la vista de inicio de sesión
router.get('/login', authController.mostrarLogin);

module.exports = router;
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const authRoutes = require('./routes/auth.routes');

// Configuración del servidor
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas
app.use('/auth', authRoutes);

// Archivos públicos
app.use(express.static(path.join(__dirname, 'public')));

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Inicio del servidor
app.listen(PORT, () => {
     console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
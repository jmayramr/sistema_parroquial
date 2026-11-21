
const path = require('path');

// Mostrar la pantalla de inicio de sesión
const mostrarLogin = (req, res) => {
    res.sendFile(
        path.join(__dirname, '../views/login.html')
    );
};

module.exports = {
    mostrarLogin
};

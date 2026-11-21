const pool = require('../config/database');

// Buscar usuario por su nombre de usuario
const buscarUsuario = async (nombreUsuario) => {
    const consulta = `
        SELECT
            id_usuario,
            id_persona,
            id_rol_global,
            nombre_usuario,
            password_hash,
            estado
        FROM usuario
        WHERE nombre_usuario = $1
        LIMIT 1
    `;

    const resultado = await pool.query(
        consulta,
        [nombreUsuario]
    );

    return resultado.rows[0];
};

module.exports = {
    buscarUsuario
};
import Cursante from "../models/cursante.model.js";

export const loginCursante = async (req, res) => {
    const { UsuarioCursante, ContraseniaCursante } = req.body;

    if (!UsuarioCursante || !ContraseniaCursante) {
        return res.status(400).json({ message: "Datos requeridos!" });
    }
    
    try {
        const cursante = await Cursante.findOne({ UsuarioCursante });

        if (!cursante) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        // Aquí podrías usar bcrypt para comparar contraseñas si están encriptadas
        if (cursante.ContraseniaCursante !== ContraseniaCursante) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        console.log("Sesión exitosa");

        // Devuelve la información del usuario junto con el mensaje de éxito
        res.json({
            message: "Inicio de sesión exitoso",
            id: cursante._id,
            nombre: cursante.NombreCursante,
            apellido: cursante.ApellidoCursante,
            // Incluye más datos si es necesario
        });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ message: 'Error interno del servidor!' });
    }
};

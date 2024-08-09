import Docente from "../models/docente.model.js";

export const loginDocente = async (req, res) => {
    const { UsuarioDocente, ContraseniaDocente } = req.body;

    if (!UsuarioDocente || !ContraseniaDocente) {
        return res.status(400).json({ message: "Datos requeridos!" });
    }

    try {
        const docente = await Docente.findOne({ UsuarioDocente });

        if (!docente) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        // Aquí podrías usar bcrypt para comparar contraseñas si están encriptadas
        if (docente.ContraseniaDocente !== ContraseniaDocente) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        console.log("Sesión exitosa");

        // Devuelve la información del usuario junto con el mensaje de éxito
        res.json({
            message: "Inicio de sesión exitoso",
            id: docente._id,
            nombre: docente.NombreDocente,
            apellido: docente.ApellidoDocente,
            // Incluye más datos si es necesario
        });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ message: 'Error interno del servidor!' });
    }
};

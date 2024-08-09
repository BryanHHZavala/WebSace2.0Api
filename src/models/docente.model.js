import mongoose from "mongoose";

const docenteSchema = new mongoose.Schema(
    {
        _id: String,
        Id_Docente: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        NombreDocente: {
            type: String,
            required: true,
        },
        ApellidoDocente: {
            type: String,
            required: true,
        },
        CorreoDocente: {
            type: String,
            required: true,
            unique: true
        },
        TelefonoDocente: {
            type: String,
            required: true,
            unique: true
        },
        DireccionDocente: {
            type: String,
            required: true,
        },
        Especialidades: {
            type: String,
            required: true,
            unique: true
        },
        UsuarioDocente: {
            type: String,
            required: true,
            unique: true
        },
        ContraseniaDocente: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Docente", docenteSchema);
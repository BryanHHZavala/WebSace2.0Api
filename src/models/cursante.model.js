import mongoose from "mongoose";

const cursanteSchema = new mongoose.Schema(
    {
        _id: String,
        Id_cursante: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        NombreCursante: {
            type: String,
            required: true,
        },
        ApellidoCursante: {
            type: String,
            required: true,
        },
        CorreoCursante: {
            type: String,
            required: true,
            unique: true
        },
        TelefonoCursante: {
            type: String,
            required: true,
            unique: true
        },
        UsuarioCursante: {
            type: String,
            required: true,
            unique: true
        },
        ContraseniaCursante: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Cursante", cursanteSchema);

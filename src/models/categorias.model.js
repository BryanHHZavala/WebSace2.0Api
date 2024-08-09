import mongoose from "mongoose";

const categoriasSchema = new mongoose.Schema(
    {
        _id: String,
        Id_Categorias: {
            type: String,
            required: true,
            unique: true
        },
        NombreCategorias: {
            type: String,
            required: true,
        }
    }
);

export default mongoose.model("Categoria", categoriasSchema);
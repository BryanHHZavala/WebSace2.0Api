import mongoose from "mongoose";
import Docente from "./docente.model.js";
import Cursante from "./cursante.model.js";
import Categoria from "./categorias.model.js";

const cursosSchema = new mongoose.Schema(
    {
        _id: String,
        Id_Curso: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        id_docente:{
            type: String,
            ref: Docente,
            required: true,
        },
        id_cursante:[{
            type: String,
            ref: 'Cursante',
        }],
        id_categoria:{
            type: String,
            ref: Categoria,
            required: true,
        },
        NombreCurso: {
            type: String,
            required: true,
            unique: true,
        },
        DescripCurso: {
            type: String,
            required: true,
            unique: true,
        },
        CantidadCursantes: {
            type: Number,
            default: 0,
        }
    },
    {
        timestamps: true,
    }
);
export default mongoose.model("Cursos", cursosSchema);
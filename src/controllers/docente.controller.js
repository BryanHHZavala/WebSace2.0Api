import Docente from "../models/docente.model.js";

export const registerDocente = async (req, res) => {
    const { Id_Docente, NombreDocente , ApellidoDocente, CorreoDocente, TelefonoDocente, DireccionDocente, Especialidades, UsuarioDocente, ContraseniaDocente } = req.body;

    try {
        const newDocente = new Docente({
            _id: Id_Docente,
            Id_Docente,
            NombreDocente,
            ApellidoDocente,
            CorreoDocente,
            TelefonoDocente,
            DireccionDocente,
            Especialidades,
            UsuarioDocente,
            ContraseniaDocente

        });
        const docenteSaved = await newDocente.save();
        res.json(docenteSaved);

    } catch (error) {
        console.log(error);
    }

}

//! obtener
export const getDocente = async (req, res) => {
    const { id } = req.params;
    
    try {
     const docente = await Docente.findById(id);
     if (!docente) {
         return res.status(404).json({ message: "Docente no encontrado!" });
     }
     res.jso(docente);
    } catch (error) {
     console.error("Hubo un error al intentar obtener el docente", error);
     res.status(500).json({ message: "Hubo un error al intentar obtener el docente" });
    }
 };
 
 //! actualizar
 export const putDocente = async (req, res) => {
     const { id } = req.params;
     const { Id_Docente, NombreDocente, ApellidoDocente, CorreoDocente, TelefonoDocente, DireccionDocente, Especialidades, UsuarioDocente, ContraseniaDocente} = req.body;
 
     try {
         const docente = await Docente.findByIdAndUpdate(id,
         {
             Id_Docente,
             NombreDocente,
             ApellidoDocente,
             CorreoDocente,
             TelefonoDocente,
             DireccionDocente,
             Especialidades,
             UsuarioDocente,
             ContraseniaDocente
         },
         { new: true }
         );
         if (!docente) {
             return res.status(404).json({ message: "Docente no encontrado" });
         }
         res.json(docente);
     } catch (error) {
         console.error("Error al actualizar el docente", error);
         res.status(500).json({ message: "Error al actualizar el docente: ", error: error.message });
     }
 };
 
 //! delete
 export const deleteDocente = async (req, res) => {
     const { id } = req.params;
     try {
         const docente = await Docente.findByIdAndDelete(id);
         if (!docente) {
             return res.status(404).json({ message: "Docente no encontrado" });
         }
         res.json({ message:  "Docente eliminado correctamente" });
     } catch (error) {
         console.error("Error al eliminar el docente: ", error);
         res.status(500).json({ message: "Error al eliminar el docente", error: error.message })
     }
 };
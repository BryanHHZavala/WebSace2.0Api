import Cursante from "../models/cursante.model.js";

//! ingresar
export const registerCursante = async (req, res) => {
  const {
    Id_cursante,
    NombreCursante,
    ApellidoCursante,
    CorreoCursante,
    TelefonoCursante,
    UsuarioCursante,
    ContraseniaCursante,
  } = req.body;

  try {
    const newCursante = new Cursante({
      _id: Id_cursante,
      Id_cursante,
      NombreCursante,
      ApellidoCursante,
      CorreoCursante,
      TelefonoCursante,
      UsuarioCursante,
      ContraseniaCursante,
    });
    const cursanteSaved = await newCursante.save();
    res.json(cursanteSaved);
  } catch (error) {
    console.log(error);
  }
};

//! obtener
export const getCursante = async (req, res) => {
   const { id } = req.params;
   
   try {
    const cursante = await Cursante.findById(id);
    if (!cursante) {
        return res.status(404).json({ message: "Cursante no encontrado!" });
    }
    res.jso(cursante);
   } catch (error) {
    console.error("Hubo un error al intentar obtener el cursante", error);
    res.status(500).json({ message: "Hubo un error al intentar obtener el cursante" });
   }
};

//! actualizar
export const putCursante = async (req, res) => {
    const { id } = req.params;
    const { Id_cursante, NombreCursante, ApellidoCursante, CorreoCursante, TelefonoCursante, UsuarioCursante, ContraseniaCursante} = req.body;

    try {
        const cursante = await Cursante.findByIdAndUpdate(id,
        {
            Id_cursante,
            NombreCursante,
            ApellidoCursante,
            CorreoCursante,
            TelefonoCursante,
            UsuarioCursante,
            ContraseniaCursante
        },
        { new: true }
        );
        if (!cursante) {
            return res.status(404).json({ message: "Cursante no encontrado" });
        }

        res.json(cursante);
    } catch (error) {
        console.error("Error al actualizar el cursante", error);
        res.status(500).json({ message: "Error al actualizar el cursante: ", error: error.message });
    }
};

//! delete
export const deleteCursante = async (req, res) => {
    const { id } = req.params;
    try {
        const cursante = await Cursante.findByIdAndDelete(id);
        if (!cursante) {
            return res.status(404).json({ message: "Cursante no encontrado" });
        }
        res.json({ message:  "Cursante eliminado correctamente" });
    } catch (error) {
        console.error("Error al eliminar el cursante: ", error);
        res.status(500).json({ message: "Error al eliminar el cursante", error: error.message })
    }
};



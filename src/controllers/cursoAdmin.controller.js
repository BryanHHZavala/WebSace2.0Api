import Cursos from "../models/cursos.model.js";
import Cursante from "../models/cursante.model.js";

export const removeCursanteFromCurso = async (req, res) => {
    const { _id, Id_cursante } = req.params;

    try {
        const result = await Cursos.updateMany(
            { _id: _id },
            { $pull: { id_cursante: Id_cursante } } 
        );
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'No se encontraron cursantes para eliminar' });
        }
        return res.status(200).json({ message: 'Se ha eliminado un cursante' });
    } catch (error) {
        console.error('Error al eliminar cursante: ', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const addCursanteToCurso = async (req, res) => {
    const { _id } = req.params;
    const { Id_cursante } = req.body;

    if (!Id_cursante) {
        return res.status(400).json({ message: 'El Id del cursante es requerido!!' });
    }

    try {
        const curso = await Cursos.findById(_id);
        if (!curso) {
            return res.status(404).json({ message: 'Curso no encontrado' });
        }

        const cursante = await Cursante.findById(Id_cursante);
        if (!cursante) {
            return res.status(404).json({ message: 'Cursante no encontrado' });
        }

        const idCursanteArray = curso.id_cursante || []; // Asegúrate de que sea un array
        if (idCursanteArray.includes(Id_cursante)) {
            return res.status(400).json({ message: 'El cursante ya ha sido inscrito en el curso' });
        }

        curso.id_cursante.push(Id_cursante);
        curso.CantidadCursantes = curso.id_cursante.length; // Actualiza la cantidad de cursantes

        const cursoUpdated = await curso.save();

        res.json(cursoUpdated);
    } catch (error) {
        console.error('Error al ingresar el cursante al curso: ', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
export const getCursantesbyCursos = async (req, res) => {
    const { cursoId } = req.params;
  
    try {
      // Encuentra el curso por ID
      const curso = await Cursos.findById(cursoId);
  
      if (!curso) {
        return res.status(404).json({ message: 'Curso no encontrado' });
      }
  
      // Obtén los IDs de los cursantes del curso
      const cursantesIds = curso.id_cursante;
  
      // Encuentra los cursantes por sus IDs
      const cursantes = await Cursante.find({ _id: { $in: cursantesIds } });
  
      res.json(cursantes);
    } catch (error) {
      console.error('Error al obtener cursantes: ', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };



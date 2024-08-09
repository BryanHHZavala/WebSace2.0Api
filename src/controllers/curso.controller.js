import Cursos from "../models/cursos.model.js";

export const registerCursos = async (req, res) => {
    const { Id_Curso, id_docente, id_cursante, id_categoria, NombreCurso, DescripCurso, CantidadCursante  } = req.body;

    try {
        const newCursos = new Cursos({
            _id: Id_Curso,
            Id_Curso,
            id_docente,
            id_cursante: [],
            id_categoria,
            NombreCurso,
            DescripCurso,
            CantidadCursantes: 0,
        });
        const cursoSaved = await newCursos.save();
        res.json(cursoSaved);

    } catch (error) {
        console.log(error);
    }
};

export const updateCurso = async (req, res) => {
    const { _id } = req.params;
    const updates = req.body;

    try {
        const cursoUpdated = await Cursos.findByIdAndUpdate(_id, updates, { new: true });
        if (!cursoUpdated) {
            return res.status(404).json({ message: 'Curso no encontrado!' });
        }
        res.json(cursoUpdated);
        res.json({ message: 'Curso eliminadon correctamente!' });
    } catch (error) {
        console.error('Error al actualizar el curso: ', error);
        res.status(500).json({ message: 'Error interno del servidor!' })
    }
};

export const deleteCurso = async (req, res) => {
    const { _id } = req.params;

    try {
        const cursoDeleted = await Cursos.findByIdAndDelete(_id);
        if (!cursoUpdated) {
            return res.status(404).json({ message: 'Curso no encontrado!' });
        }
        res.json(cursoUpdated);
        res.json({ message: 'Curso elimin correctamente!' });
    } catch (error) {
        console.error('Error al actualizar el curso: ', error);
        res.status(500).json({ message: 'Error interno del servidor!' })
    }
};

// Obtener todos los cursos
export const getCursos = async (req, res) => {
    try {
      const cursos = await Cursos.aggregate([
        {
          $lookup: {
            from: "docentes",
            localField: "id_docente",
            foreignField: "_id",
            as: "docente"
          }
        },
        {
          $unwind: {
            path: "$docente",
            preserveNullAndEmptyArrays: true // En caso de que no haya docente asociado
          }
        }
      ]);
      res.json(cursos);
    } catch (error) {
      console.error('Error al obtener cursos: ', error);
      res.status(500).json({ message: 'Error interno del servidor!' });
    }
  };


export const getCoursesByDocente = async (req, res) => {
  const { docenteId } = req.params; // Obtén el ID del docente de los parámetros de la ruta

  if (!docenteId) {
    return res.status(400).json({ message: 'ID del docente es requerido' });
  }

  try {
    const cursos = await Cursos.find({ id_docente: docenteId }); // Encuentra todos los cursos del docente
    res.json(cursos); // Devuelve los cursos encontrados
  } catch (error) {
    console.error('Error al obtener cursos: ', error);
    res.status(500).json({ message: 'Error al obtener cursos', error: error.message }); // Devuelve un error en caso de fallo
  }
};



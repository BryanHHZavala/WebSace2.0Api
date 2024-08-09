
import Cursos from '../models/cursos.model.js';

export const Miscursos = async (req, res) => {
    const { cursanteId } = req.params;

    try {
        const cursos = await Cursos.find({ id_cursante: cursanteId });

        if (cursos.length === 0) {
            return res.status(404).json({ message: 'No se encontraron cursos para este cursante.' });
        }

        res.json(cursos);
    } catch (error) {
        console.error('Error al obtener cursos:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

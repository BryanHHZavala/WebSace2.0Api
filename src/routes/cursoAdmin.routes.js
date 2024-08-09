import { Router } from 'express';
import { addCursanteToCurso, removeCursanteFromCurso, getCursantesbyCursos} from '../controllers/cursoAdmin.controller.js';

const router = Router();

router.post('/admincursoA/:_id', addCursanteToCurso);
router.delete('/admincursoR/:_id/:Id_cursante', removeCursanteFromCurso);
router.get('/admincursoG/:cursoId', getCursantesbyCursos);

export default router;
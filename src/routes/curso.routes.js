import { Router } from 'express';
import { registerCursos, deleteCurso, updateCurso, getCursos, getCoursesByDocente } from "../controllers/curso.controller.js";

const router = Router();

router.post('/registrarCursos', registerCursos);
router.patch('/registrarCursos/:_id', updateCurso);
router.delete('/registrarCursos/:_id', deleteCurso);
router.get('/getCursos', getCursos);
router.get('/getCursos/:docenteId', getCoursesByDocente);

export default router;
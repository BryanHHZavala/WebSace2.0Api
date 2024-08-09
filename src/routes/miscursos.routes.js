import { Router } from 'express';
import { Miscursos } from "../controllers/miscursos.controller.js";

const router = Router();

router.get('/miscursos/:cursanteId', Miscursos);

export default router;
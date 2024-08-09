import { Router } from 'express';
import { deleteCursante, getCursante, putCursante, registerCursante } from "../controllers/cursante.controller.js";

const router = Router();

router.post('/cursante', registerCursante);
router.get('/cursante/:id', getCursante);
router.put('/cursante/:id', putCursante);
router.delete('/cursante/:id', deleteCursante);

export default router;

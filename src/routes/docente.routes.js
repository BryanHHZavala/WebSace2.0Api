import { Router } from 'express';
import { deleteDocente, getDocente, putDocente, registerDocente} from "../controllers/docente.controller.js";

const router = Router();

router.post('/docente', registerDocente);
router.get('/docente/:id', getDocente);
router.put('/docente/:id', putDocente);
router.delete('/docente/:id', deleteDocente);

export default router;
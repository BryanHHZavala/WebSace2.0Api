import { Router } from 'express';
import { loginDocente } from "../controllers/loginDocente.controller.js";

const router = Router();

router.post('/loginDocente', loginDocente);

export default router;
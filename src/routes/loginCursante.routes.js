import { Router } from 'express';
import { loginCursante } from "../controllers/loginCursante.controller.js";

const router = Router();

router.post('/loginCursante', loginCursante);

export default router;
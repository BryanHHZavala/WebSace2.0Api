import { Router } from 'express';
import { deleteCat, getCat, putCat, registerCat, getAllCategories } from "../controllers/categorias.controller.js";
import { get } from 'mongoose';

const router = Router();

router.post('/cat', registerCat);
router.get('/cat/:id', getCat);
router.put('/cat/:id', putCat);
router.delete('/cat/:id', deleteCat);
router.get('/getcat', getAllCategories);

export default router;

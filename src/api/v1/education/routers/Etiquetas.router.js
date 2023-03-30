import { Router } from 'express';
import * as etiquetasController from '../controllers/Etiquetas.controller';

const router = new Router();

router.get('/', etiquetasController.getEtiquetasList);
router.get('/:id', etiquetasController.getEtiquetasItem);
router.post('/', etiquetasController.postEtiquetasItem);

export default router;
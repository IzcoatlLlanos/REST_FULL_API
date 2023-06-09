import { Router } from 'express';
import * as etiquetasController from '../controllers/Etiquetas.controller';

const router = new Router();

router.get('/', etiquetasController.getEtiquetasList);
router.get('/:id', etiquetasController.getEtiquetasItem);
router.post('/', etiquetasController.postEtiquetasItem);
router.delete('/:id', etiquetasController.deleteEtiquetasItem);
router.put('/:id', etiquetasController.putEtiquetasItem);

router.get('/valor/:idEtiqueta/:idValor', etiquetasController.getValoresItem);
router.put('/valor/:idEtiqueta/:idValor', etiquetasController.pushValor);
router.put('/valor/delete/:idEtiqueta/:idValor', etiquetasController.deleteValor);

export default router;

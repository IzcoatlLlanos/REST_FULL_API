import { Router } from 'express'; 
import * as periodosController from '../controllers/Periodos.controller'; 

const router = Router(); 

router.get('/', periodosController.getPeriodosList);

router.get('/:id', periodosController.getPeriodosItem); 

router.post('/', periodosController.postPeriodosItem); 

//FIC: route add many edificios for web/pwa
router.post('/many-pwa', periodosController.addManyPeriodosPWA);

router.put('/:id', periodosController.putPeriodoItem);

router.delete('/:id', periodosController.deletePeriodosItem);

export default router;

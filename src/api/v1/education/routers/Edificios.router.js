import { Router } from "express";
import * as Edificiocontroller from '../controllers/Edificio.controller';

const router = Router(); 

router.get('/', Edificiocontroller.getEdificiosList); 

router.get('/:id', Edificiocontroller.getEdificioItem); 

router.post('/', Edificiocontroller.postEdificioItem);

//FIC: route add many edificios for web/pwa
router.post('/many-pwa', Edificiocontroller.addManyEdificiosPWA);

router.put('/:id', Edificiocontroller.putEdificioItem);

router.delete('/:id', Edificiocontroller.deleteEdificiosItem);


export default router;
import { Router } from "express";
import * as gruposController from '../controllers/grupos.controller'

const router = Router();

router.get('/', gruposController.getGruposList);
router.get('/:id', gruposController.getGruposItem);

export default router;
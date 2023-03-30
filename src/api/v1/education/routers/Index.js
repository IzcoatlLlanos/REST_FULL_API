import { Router } from 'express'; 
import config from '../../../../config/config'; 

// Import Routes 
import PeriodosRoutes from './Periodos.router';
import EdficiosRouter from './Edificios.router'; 
import gruposRouter from './Grupos.router';
import etiquetasRouter from './Etiquetas.router';
//import ordersRoutes from './orders.routes'; 
const routerAPI = (app) => { 
  const router = Router(); 
  const api = config.API_URL; 
  app.use(api, router); 
  // Routes 
  router.use('/Edificios-API', EdficiosRouter); 
  router.use('/Periodos-API', PeriodosRoutes);  
  router.use('/Grupos-API', gruposRouter);
  router.use('/Etiquetas-API', etiquetasRouter);

  return router; 
}; 
module.exports = routerAPI;
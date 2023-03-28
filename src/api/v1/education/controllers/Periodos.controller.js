import * as PeriodosService from '../services/periodos.service';
import boom from '@hapi/boom';

//FIC: API GET 
 
export const getPeriodosList = async (req, res, next) => { 
    try{ 
      const periodosList = await PeriodosService.getPeriodosList(); 
      if (!periodosList) { 
        throw boom.notFound('No se encontraron periodos registrados.'); 
      } else if (periodosList) { 
        res.status(200).json(periodosList); 
      }  

      } catch(error) { 
        next(error); 
      } 
    };

    export const getPeriodosItem = async (req, res, next) => {
      try{
        const { id } = req.params;
        const keyType = req.query.keyType || 'OK';
        const periodosItem = await PeriodosService.getPeriodosItem(id, keyType);
        if(!periodosItem){
          throw boom.notFound('No se encontraron periodos registrados');
        }else if(periodosItem){
          res.status(200).json(periodosItem);
        }
      }catch(error){
        next(error);
      }
    }

    export const postPeriodosItem = async (req, res, next) => { 
      try { 
        const paPeriodosItem = req.body; 
        const newPeriodosItem = await PeriodosService.postPeriodosItem(paPeriodosItem); 
        if (!newPeriodosItem) { 
          throw boom.badRequest('No se pudo crear el periodo.'); 
        } else if (newPeriodosItem) { 
          res.status(201).json(newPeriodosItem); 
        } 
      } catch (error) { 
        console.log(error); 
        next(error); 
      } 
    };
    
    //===========================================
    //FIC: New Controllers for WEB/PWA ¡NO SAP!
    //===========================================
    //FIC: Add Many Persons for WEB/PWA
    export const addManyPeriodosPWA = async (req, res, next) => {
      try {
          const periodoAdded = await PeriodosService.addManyPeriodosPWA(req.body);
          if (periodoAdded.fail) {
              res.status(409).json(periodoAdded);
          } else if (periodoAdded.success) {
              res.status(201).json(periodoAdded);
          }
      } catch (error) {
          next(error);
      }
    };

    //Update
    export const putPeriodoItem = async (req, res, next) => {
      try {
        const { id } = req.params;
            console.log('FIC: controller id -> ', id);
        const paPeriodoItem = req.body;
            console.log('FIC: controller body -> ', paPeriodoItem);
        const updatePeriodoItem = await PeriodosService.putPeriodoItem(id, paPeriodoItem );
        if (!updatePeriodoItem) {
          throw boom.badRequest('No se pudo actualizar el Periodo.');
        } else if (updatePeriodoItem) {
          res.status(200).json(updatePeriodoItem);
        }
      } catch (error) {
        next(error);
      }
    };

    //Delete
    export const deletePeriodosItem = async (req, res, next) => {
      try {
        const { id } = req.params;
        const deletedPeriodosItem = await PeriodosService.deletePeriodosItem(id);
        if (!deletedPeriodosItem) {
          throw boom.notFound(`No se encontró el periodo con id ${req.params.id}.`);
        } else if (deletedPeriodosItem) {
          res.status(200).json(deletedPeriodosItem);
        }
      } catch (error) {
        next(error);
      }
    };
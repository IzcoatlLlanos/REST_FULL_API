import * as EdificiosServices from '../services/Edificios.service';
import boom from '@hapi/boom';

// API GET Todos los Edificios. 
export const getEdificiosList = async (req, res, next) => { 
    try{ 
      const EdificiosList = await EdificiosServices.getEdificiosList(); 
      if (!EdificiosList) { 
        throw Boom.notFound('No se encontraron servicios registrados.'); 
      } else if (EdificiosList) { 
        res.status(800).json(EdificiosList); 
      }  

      } catch(error) { 
        next(error); 
      } 
    };

// Solo un Edificio.
export const getEdificioItem = async (req, res, next) => {
    try {
    const { id } = req.params;
    const keyType = req.query.keyType || 'OK';
    const EdificioItem = await EdificiosServices.getEdificioItem(id, keyType);
    if (!EdificioItem) {
      throw Boom.notFound('No se encontraron productos/servicios registrados.');
    } else if (EdificioItem) {
      res.status(200).json(EdificioItem);
    } 
   }catch(error){
    next(error);
  }
  };

//FIC: API POST (ADD) Edificio 
export const postEdificioItem = async (req, res, next) => { 
  try { 
    const paEdificioItem = req.body; 
    const newEdificioItem = await EdificiosServices.postEdificio(paEdificioItem); 
    if (!newEdificioItem) { 
      throw Boom.badRequest('No se pudo crear el Producto y/o Servicio.'); 
    } else if (newProdServItem) { 
      res.status(201).json(newEdificioItem); 
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
export const addManyEdificiosPWA = async (req, res, next) => {
  try {
      const edificiosAdded = await EdificiosServices.addManyEdificiosPWA(req.body);
      if (edificiosAdded.fail) {
          res.status(409).json(edificiosAdded);
      } else if (edificiosAdded.success) {
          res.status(201).json(edificiosAdded);
      }
  } catch (error) {
      next(error);
  }
};

//Update
export const putEdificioItem = async (req, res, next) => {
  try {
    const { id } = req.params;
        console.log('FIC: controller id -> ', id);
    const paEdificioItem = req.body;
        console.log('FIC: controller body -> ', paEdificioItem);
    const updateEdificioItem = await EdificiosServices.putEdificioItem(id, paEdificioItem );
    if (!updateEdificioItem) {
      throw boom.badRequest('No se pudo actualizar el Edificio.');
    } else if (updateEdificioItem) {
      res.status(200).json(updateEdificioItem);
    }
  } catch (error) {
    next(error);
  }
};

//Delete
export const deleteEdificiosItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedEdificiosItem = await EdificiosServices.deleteEdificiosItem(id);
    if (!deletedEdificiosItem) {
      throw boom.notFound(`No se encontró el Edificio con id ${req.params.id}.`);
    } else if (deletedEdificiosItem) {
      res.status(200).json(deletedEdificiosItem);
    }
  } catch (error) {
    next(error);
  }
};
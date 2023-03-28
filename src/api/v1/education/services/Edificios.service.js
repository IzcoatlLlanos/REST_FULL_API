import EdificiosModel from "../models/Edificios.model";
import boom from '@hapi/boom';
import { OK, FAIL } from '../middleware/resp.handler';

//FIC: GET Edificios
export const getEdificiosList = async () => { 
    let EdificiosList; 
    try { 
          EdificiosList = await EdificiosModel.find(); 
          return(EdificiosList); 
    } catch (error) { 
      //res.status(500).json({ message: 'Error: ' + GetEdificiosError }); 
      throw boom.internal(error); 
    } 
  };

  //GET Edificio  by ID 
export const getEdificioItem = async (id, keyType) => { 
    let EdificioItem; 
    try { 
      if (keyType === 'OK') { 
        EdificioItem = await EdificiosModel.findOne({ 
          IdEdificioOK: id, 
        }); 
      } else if (keyType === 'BK') { 
          EdificioItem = await EdificiosModel.findOne({ 
            IdEdificioBK: id, 
        }); 
      } 
      return(EdificioItem); 
    } catch (error) { 
      throw boom.internal(error); 
    } 
  };

//POST (ADD) Edificio.
export const postEdificio = async (paEdificioItem) => {
  try { 
    const newEdificioItem = new EdificiosModel(paEdificioItem); 
    return await newEdificioItem.save(); 
  } catch (error) { 
    throw error + " - Error Edificios.Service postEdificio"; 
  } 
}

//FIC: ADD MANY PERSONS FROM WEB/PWA ¡NO SAP!
export const addManyEdificiosPWA = async (edificios) => {
  try {
      const edificiosAdded = await cat_edificios.insertMany(edificios, { order: true });
      return OK('Edificio(s) agregado(s) correctamente al catalogo.', edificiosAdded);
  } catch (error) {
      if (error.code === 11000) {
          return FAIL(
              'Alguno(s) de los edificios enviados ya están registradas en el catalogo de la BD. Verifica la información e intenta de nuevo.',
              error
          );
      } else {
          return FAIL(
              'No se pudo agregar el edificio al catalogo. Error en el servidor.',
              error
          );
      }
  }
};

//FIC: SERVICES PUT
// PUT (MODIFY) edificios
export const putEdificioItem = async (id, paEdificioItem) => {
  try {
    //console.log("FIC: PUT API INSTITUTO", id);
    return await EdificiosModel.findOneAndUpdate({ IdEdificioOK: id }, paEdificioItem, {new: true,});
  } catch (error) {
    throw boom.badImplementation(error);
  }
};

  //Delete periodos Item.
  export const deleteEdificiosItem = async (id) => {
    try {
      return await EdificiosModel.findOneAndDelete({ IdEdificioOK: id });
    } catch (error) {
      throw boom.badImplementation(error);
    }
  };
  
  



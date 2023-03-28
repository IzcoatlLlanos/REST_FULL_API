import Periodos from '../models/Periodos.model';
import boom from '@hapi/boom';
import { OK, FAIL } from '../middleware/resp.handler';
 
export const getPeriodosList = async () => { 
    let periodosList; 
    try { 
          periodosList = await Periodos.find(); 
          return(periodosList); 
    } catch (error) { 
      //res.status(500).json({ message: 'Error: ' + ficError }); 
      throw boom.internal(error); 
    } 
  };
  export const getPeriodosItem = async (id, keyType) => { 
    let periodosItem; 
    try { 
      if(keyType === 'OK'){
        periodosItem = await Periodos.findOne({
          IdPeriodoOK: id,
        });
      } else if (keyType === 'BK'){
        periodosItem = await Periodos.findOne({
          IdPeriodoBK: id,
        });
      }
      return(periodosItem);
    } catch (error) { 
      //res.status(500).json({ message: 'Error: ' + ficError }); 
      throw boom.internal(error); 
    } 
  };

  export const postPeriodosItem = async (paPeriodosItem) => { 
    try { 
      const newPeriodosItem = new Periodos(paPeriodosItem); 
      return await newPeriodosItem.save(); 
    } catch (error) { 
      throw error; 
    } 
  };

  export const addManyPeriodosPWA = async (periodos) => {
    try {
        const periodosAdded = await cat_periodos.insertMany(periodos, { order: true });
        return OK('Periodo(s) agregado(s) correctamente al catalogo.', periodosAdded);
    } catch (error) {
        if (error.code === 11000) {
            return FAIL(
                'Alguno(s) de los periodos enviados ya están registradas en el catalogo de la BD. Verifica la información e intenta de nuevo.',
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
  
  //PUT (UPDATE) Grupos Item. 
  export const putPeriodoItem = async (id, paPeriodoItem) => {
    try {
      //console.log("FIC: PUT API INSTITUTO", id);
      return await Periodos.findOneAndUpdate({ IdPeriodoOK: id }, paPeriodoItem, {new: true,});
    } catch (error) {
      throw boom.badImplementation(error);
    }
  };
  
  //Delete periodos Item.
  export const deletePeriodosItem = async (id) => {
    try {
      return await Periodos.findOneAndDelete({ IdPeriodoOK: id });
    } catch (error) {
      throw boom.badImplementation(error);
    }
  };
  
  
import * as gruposService from '../services/Grupos.service'
import boom from '@hapi/boom'

export const getGruposList = async (req, res, next) => {
    try {
        const gruposList = await gruposService.getGruposList();
        if(!gruposList){
            throw boom.notFound('No se encontraron servicios registrados');
        } else if (gruposList){
            res.status(200).json(gruposList);
        }
    } catch(error) {
        //res.status(500).json({ message: 'Error: ' + ficError }); 
        next(error);
    }
};

export const getGruposItem = async (req, res, next) => {
    try{
        const { id } = req.params;
        const keyType = req.query.keyType || 'OK';
        const grupoItem = await gruposService.getGruposItem(id, keyType);
        if(!grupoItem) {
            throw boom.notFound('No se encontro el servicio');
        } else if(grupoItem) {
            res.status(200).json(grupoItem);
        }
    } catch(error) {
        throw boom.internal(error);
    }
};
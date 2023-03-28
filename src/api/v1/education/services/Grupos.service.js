import gruposModel from '../models/Grupos.model';
import boom from '@hapi/boom';

export const getGruposList = async () => {
    let gruposList;
    try {
        gruposList = await gruposModel.find();
        return(gruposList);
    }catch(error) {
        throw boom.internal(error); 
    }
};

export const getGruposItem = async (id, keyType) => {
    let grupoItem;
    try {
        if(keyType == 'OK'){
            grupoItem = await gruposModel.findOne({
                IdGrupoOK: id,
            });
        } else if(keyType == 'BK'){
            grupoItem = await gruposModel.findOne({
                IdGrupoBK: id
            });
        }
        return(grupoItem);
    } catch(error) { 
        throw boom.internal(error);
    }
};
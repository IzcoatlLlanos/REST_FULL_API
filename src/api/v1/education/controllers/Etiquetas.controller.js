import * as etiquetasService from '../services/Etiquetas.service';
import boom from '@hapi/boom';

export const getEtiquetasList = async (req, res, next) => {
    try {
        const etiquetasList = await etiquetasService.getEtiquetasList();
        if (!etiquetasList) throw boom.notFound('No se encontraron etiquetas registradas');
        else if (etiquetasList) res.status(200).json(etiquetasList);
    } catch (error) {
        next(error);
    }
};

export const getEtiquetasItem = async (req, res, next) => {
    const { id } = req.params;
    const keyType = req.keyType | 'OK';
    try {
        const etiquetaItem = await etiquetasService.getEtiquetasList(id,keyType);
        if (!etiquetaItem) throw boom.notFound('No se encontro la etiqueta');
        else if (etiquetaItem) res.status(200).json(etiquetaItem);
    } catch (error) {
       next(error); 
    }
};

export const postEtiquetasItem = async (req, res, next) => {
    try {
        const paEtiquetaItem = req.body;
        const newEtiquetaItem = etiquetasService.postEtiquetasItem(paEtiquetaItem);
        if (!newEtiquetaItem) throw boom.badRequest('No se pudo insertar el dato');
        else if (newEtiquetaItem) res.status(200).json(newEtiquetaItem);
    } catch (error) {
        next(error);
    }
};
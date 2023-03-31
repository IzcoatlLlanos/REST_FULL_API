import * as etiquetasService from '../services/Etiquetas.service';
import boom from '@hapi/boom';

export const getEtiquetasList = async (req, res, next) => {
    let etiquetasList;
    try {
        etiquetasList = await etiquetasService.getEtiquetasList();
        if (!etiquetasList) throw boom.notFound('No se encontraron etiquetas registradas');
        else if (etiquetasList) res.status(200).json(etiquetasList);
    } catch (error) {
        next(error);
    }
};

export const getEtiquetasItem = async (req, res, next) => {
    const { id } = req.params;
    const keyType = req.keyType || 'ID';
    let etiquetaItem;
    try {
        etiquetaItem = await etiquetasService.getEtiquetasItem(id, keyType);
        if (!etiquetaItem) throw boom.notFound('No se encontro la etiqueta');
        else if (etiquetaItem) res.status(200).json(etiquetaItem);
    } catch (error) {
       next(error); 
    }
};

export const postEtiquetasItem = async (req, res, next) => {
    try {
        const paEtiquetaItem = req.body;
        const newEtiquetaItem = await etiquetasService.postEtiquetasItem(paEtiquetaItem);
        if (!newEtiquetaItem) throw boom.badRequest('No se pudo insertar el dato');
        else if (newEtiquetaItem) res.status(201).json(newEtiquetaItem);
    } catch (error) {
        next(error);
    }
};

export const deleteEtiquetasItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedEtiquetaItem = await etiquetasService.deleteEtiquetasItem(id);
        if (!deletedEtiquetaItem) throw boom.notFound('No se encontro la etiqueta');
        else if (deletedEtiquetaItem) res.status(200).json(deletedEtiquetaItem);
    } catch (error) {
        next(error);
    }
};

export const putEtiquetasItem = async (req, res, next) => {
    const { id } = req.params;
    const paEtiquetasItem = req.body;
    try {
        const updatedEtiqueta = await etiquetasService.putEtiquetaItem(id, paEtiquetasItem);
        if(!updatedEtiqueta) throw boom.notFound('No se encontro la etiqueta');
        else if(updatedEtiqueta) res.status(200).json(updatedEtiqueta);
    } catch (error) {
        next(error);
    }
};
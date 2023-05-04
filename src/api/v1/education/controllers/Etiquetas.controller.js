import * as etiquetasService from '../services/Etiquetas.service';
import boom from '@hapi/boom';

export const getEtiquetasList = async (req, res, next) => {
    let etiquetasList;
    try {
        etiquetasList = await etiquetasService.getEtiquetasList();
        if (!etiquetasList.success) throw boom.notFound(etiquetasList.error);
        else if (etiquetasList.success) res.status(200).json(etiquetasList);
    } catch (error) {
        next(error);
    }
};

export const getEtiquetasItem = async (req, res, next) => {
    const { id } = req.params;
    const keyType = req.query.keyType || 'ID';
    let etiquetaItem;
    try {
        etiquetaItem = await etiquetasService.getEtiquetasItem(id, keyType);
        if (!etiquetaItem.success) throw boom.notFound(etiquetaItem.error);
        else if (etiquetaItem.success) res.status(200).json(etiquetaItem);
    } catch (error) {
       next(error); 
    }
};

export const postEtiquetasItem = async (req, res, next) => {
    try {
        const paEtiquetaItem = req.body;
        const newEtiquetaItem = await etiquetasService.postEtiquetasItem(paEtiquetaItem);
        if (!newEtiquetaItem.success) throw boom.badRequest(newEtiquetaItem.error);
        else if (newEtiquetaItem.success) res.status(201).json(newEtiquetaItem);
    } catch (error) {
        next(error);
    }
};

export const deleteEtiquetasItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedEtiquetaItem = await etiquetasService.deleteEtiquetasItem(id);
        if (!deletedEtiquetaItem.success) throw boom.notFound(deletedEtiquetaItem.error);
        else if (deletedEtiquetaItem.success) res.status(200).json(deletedEtiquetaItem);
    } catch (error) {
        next(error);
    }
};

export const putEtiquetasItem = async (req, res, next) => {
    const { id } = req.params;
    const paEtiquetasItem = req.body;
    try {
        const updatedEtiqueta = await etiquetasService.putEtiquetaItem(id, paEtiquetasItem);
        if(!updatedEtiqueta.success) throw boom.notFound(updatedEtiqueta.error);
        else if(updatedEtiqueta.success) res.status(200).json(updatedEtiqueta);
    } catch (error) {
        next(error);
    }
};

//Subdocumentos

export const getValoresItem = async (req, res, next) => {
    try {
        const {idEtiqueta, idValor} = req.params;
        const valoresItem = await etiquetasService.getValoresItem(
            idEtiqueta,idValor
        );
        if (!valoresItem.success) throw boom.notFound(valoresItem.error);
        else if (valoresItem.success) res.status(200).json(valoresItem);
    } catch (error) {
        next(error);
    }
};

export const pushValor = async (req, res, next) => {
    try {
        const {idEtiqueta, idValor} = req.params;
        const infoValor = req.body;
        const etiquetaValorUpdated = await etiquetasService.pushValor(
            idEtiqueta,idValor,infoValor
        );
        if (!etiquetaValorUpdated.success) {
            throw boom.notFound(etiquetaValorUpdated.error);
        }
        else if (etiquetaValorUpdated.success) {
            res.status(200).json(etiquetaValorUpdated);
        } 
    } catch (error) {
        next(error);
    }
}; //Sabe porque el try se brinca al catch en automatico

export const deleteValor = async (req, res, next) => {
    try {
        const { idEtiqueta, idValor } = req.params;

        const etiquetaValorUpdated = await etiquetasService.deleteValor(
            idEtiqueta,idValor
        );
        if (!etiquetaValorUpdated.success) {
            throw boom.notFound(etiquetaValorUpdated.error);
        }
        else if (etiquetaValorUpdated.success) {
            res.status(200).json(etiquetaValorUpdated);
        } 
    } catch (error) {
        next(error);
    }
};
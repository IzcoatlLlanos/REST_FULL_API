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
    const keyType = req.query.keyType || 'ID';
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

//Subdocumentos

export const getValoresItem = async (req, res, next) => {
    try {
        const {idEtiqueta, idValor} = req.params;
        const valoresItem = await etiquetasService.getValoresItem(
            idEtiqueta,idValor
        );
        if(!valoresItem.succes) throw boom.notFound(valoresItem.error);
        else res.status(200).json(valoresItem);
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
        else if (etiquetaValorUpdated.succes) {
            res.status(200).json(etiquetaValorUpdated);
        } 
    } catch (error) {
        next(error);
    }
}; //Sabe porque el try se brinca al catch en automatico

export const deleteValor = async (req, res, next) => {
    try {
        const {idEtiqueta, idValor} = req.params;

        const etiquetaValorUpdated = await etiquetasService.deleteValor(
            idEtiqueta,idValor
        );
        if (!etiquetaValorUpdated.success) {
            throw boom.notFound(etiquetaValorUpdated.error);
        }
        else if (etiquetaValorUpdated.succes) {
            res.status(200).json(etiquetaValorUpdated);
        } 
    } catch (error) {
        next(error);
    }
};
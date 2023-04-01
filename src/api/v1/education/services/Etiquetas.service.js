import EtiquetasModel from "../models/Etiquetas.model";
import boom from "@hapi/boom";

export const getEtiquetasList = async() => {
    try {
        return await EtiquetasModel.find();
    } catch (error) {
        throw boom.internal(error);
    }
};

export const getEtiquetasItem = async (id, keyType) => {
    try {
        if(keyType=='ID')return await EtiquetasModel.findOne({IdEtiquetaOK: id});
        else if(keyType=='ET')return await EtiquetasModel.findOne({Etiqueta: id});
    } catch (error) {
        throw boom.internal(error);
    }
};

export const postEtiquetasItem = async (etiquetasItem) => {
    try {
        const paEtiquetaItem = new EtiquetasModel(etiquetasItem);
        return await paEtiquetaItem.save();
    } catch (error) {
        throw boom.internal(error);
    }
};

export const deleteEtiquetasItem = async (id) => {
    try {
        return await EtiquetasModel.findOneAndDelete({IdEtiquetaOK: id});
    } catch (error) {
        throw boom.badImplementation(error);
    }
};


export const putEtiquetaItem = async (id, etiquetaItem) => {
    try {
        return await EtiquetasModel.findOneAndUpdate({IdEtiquetaOK: id}, etiquetaItem, {new: true,});
    } catch (error) {
        throw boom.badImplementation(error);
    }
};

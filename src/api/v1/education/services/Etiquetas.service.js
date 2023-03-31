import EtiquetasModel from "../models/Etiquetas.model";
import boom from "@hapi/boom";

export const getEtiquetasList = async() => {
    try {
        return await EtiquetasModel.find();
    } catch (error) {
        throw boom.internal(error);
    }
};

export const getEtiquetasItem = async (id) => {
    try {
        return await EtiquetasModel.findOne({IdEtiquetaOK: id});
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
        return await EtiquetasModel.findByIdAndDelete({IdEtiquetaOK: id});
    } catch (error) {
        throw boom.internal(error);
    }
};

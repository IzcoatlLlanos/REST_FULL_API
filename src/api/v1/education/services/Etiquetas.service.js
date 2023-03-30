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
        if (keyType=='OK') return await EtiquetasModel.findOne({IdEtiquetaOK: id});
        else if (keyType=='BK') return await EtiquetasModel.findOne({IdEtiquetaBK: id});
    } catch (error) {
        throw boom.internal(error);
    }
};

export const postEtiquetasItem = async (etiquetasItem) => {
    try {
        const paEtiquetaItem = EtiquetasModel(etiquetasItem);
        return await paEtiquetaItem.new();
    } catch (error) {
        throw boom.internal(error);
    }
};

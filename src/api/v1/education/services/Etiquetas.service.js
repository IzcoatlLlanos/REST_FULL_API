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

//Subdocumentos

export const getValoresItem = async (idEtiqueta, idValor) => {
    try {
        const etiqueta = await EtiquetasModel.findOne({
            IdEtiquetaOK: idEtiqueta,
        });
        
        const { valores } = etiqueta;
        
        const index = valores.findIndex(
            (valor) => valor.IdValorOK == idValor
        );

        const valoresItem = index>=0?valores[index]:undefined;
        return {succes: index>=0,valoresItem};
    } catch (error) {
        return {success:false, error};
    }
};

export const pushValor = async (idEtiqueta, idValor, infoValor) => {
    try {   
        const etiqueta = await EtiquetasModel.findOne({
            IdEtiquetaOK: idEtiqueta
        });
        const { valores } = etiqueta;

        const index = valores.findIndex(
            (valor) => valor.IdValorOK == idValor
        );
        if (index>=0) {
            valores[index] = infoValor;
        } else {
            valores.push(infoValor);
        }

        const valorUpdated = await EtiquetasModel.findOneAndUpdate(
            { IdEtiquetaOK: idEtiqueta },
            { $set: { valores } },
            { new: true }
        );
        return {succes: true, valorUpdated};
    } catch (error) {
        return {success:false, error};
    }
};

export const deleteValor = async (idEtiqueta, idValor) => {
    const etiqueta = await EtiquetasModel.findOne({
        IdEtiquetaOK: idEtiqueta
    });
    const { valores } = etiqueta;

    const index = valores.findIndex(
        (valor) => valor.IdValorOK == idValor
    );
    if (index >= 0) {
        valores.spliece(index,1);
    }

    try {
        const etiquetaValorUpdated = await EdificiosModel.findOneAndUpdate(
            { IdEtiquetaOK: idEtiqueta },
            { $set: { valores } },
            { new: true }
        );
        return { succes: true, etiquetaValorUpdated };
    } catch (error) {
        return { succes: false, error };
    }
};
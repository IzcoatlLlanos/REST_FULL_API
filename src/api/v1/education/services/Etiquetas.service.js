import EtiquetasModel from "../models/Etiquetas.model";
import boom from "@hapi/boom";

export const getEtiquetasList = async() => {
    try {
        const etiquetasList = await EtiquetasModel.find();
        return {success: true, etiquetasList};
    } catch (error) {
        return {success: false, error};
    }
};

export const getEtiquetasItem = async (id, keyType) => {
    try { 
        let etiquetaItem;
        if(keyType=='ID') etiquetaItem = await EtiquetasModel.findOne({IdEtiquetaOK: id});
        else if(keyType=='ET') etiquetaItem = await EtiquetasModel.findOne({Etiqueta: id});
        return {success: true, etiquetaItem};
    } catch (error) {
        return {success: false, error};
    }
};

export const postEtiquetasItem = async (etiquetasItem) => {
    try {
        const paEtiquetaItem = new EtiquetasModel(etiquetasItem);
        await paEtiquetaItem.save();
        return {success: true, paEtiquetaItem};
    } catch (error) {
        return {success: false, error};
    }
};

export const deleteEtiquetasItem = async (id) => {
    try {
        const etiquetaToDelete = await EtiquetasModel.findOneAndDelete({IdEtiquetaOK: id});
        return {success: true, etiquetaToDelete};
    } catch (error) {
        return {success: false, error};
    }
};


export const putEtiquetaItem = async (id, etiquetaItem) => {
    try {
        const etiquetaToUpdate = await EtiquetasModel.findOneAndUpdate({IdEtiquetaOK: id}, etiquetaItem, {new: true,});
        return {success: true, etiquetaToUpdate};
    } catch (error) {
        return {success: false, error};
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
        return {success: index>=0,valoresItem};
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
        return {success: true, valorUpdated};
    } catch (error) {
        return {success:false, error};
    }
};

export const deleteValor = async (idEtiqueta, idValor) => {
    
    try {

    const etiqueta = await EtiquetasModel.findOne({
        IdEtiquetaOK: idEtiqueta
    });
    const { valores } = etiqueta;

    const index = valores.findIndex(
        (valor) => valor.IdValorOK == idValor
    );
    if (index >= 0) {
        valores.splice(index,1);
    }

    
        const etiquetaValorUpdated = await EtiquetasModel.findOneAndUpdate(
            { IdEtiquetaOK: idEtiqueta },
            { $set: { valores } },
            { new: true }
        );
        return { success: true, etiquetaValorUpdated };
    } catch (error) {
        return { success: false, error };
    }
};
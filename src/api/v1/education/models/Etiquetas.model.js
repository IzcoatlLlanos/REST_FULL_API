import mongoose from "mongoose";

const etiquetaSchema = mongoose.Schema({
    IdInstitutoOK: {type: String, required: true},
    IdEtiquetaOK: {type: String},
    Etiqueta: {type: String},
    Indicen: {type: String},
    Coleccion: {type: String},
    Seccion: {type: String},
    Secuencia: {type: String},
    valores: [{
        IdValorPA: {type: String},
        IdValorOK: {type: String},
        Valor: {type: String},
        Imagen: {type: String}
    }]
});

export default mongoose.model(
    'etiquetas',
    etiquetaSchema,
    'etiquetas'
);

/**"IdInstitutoOK": "9001",
  "IdEtiquetaOK": "IDSUBCATEGO",
  "Etiqueta": "Subcategoria",
  "Indice": "subcategoria, laptops, accesorio, audio, ropa",
  "Coleccion": "CatProdServ",
  "Seccion": "Principal",
  "Secuencia": 10,
  "valores": [
    {
      "IdValorPA": "IDCATEGO-IDTECNO",
      "IdValorOK": "IDLAPTOP",
      "Valor": "Laptops",
      "Imagen": "https://"
    },
    {
      "IdValorPA": "IDCATEGO-IDTECNO",
      "IdValorOK": "IDACCECOMPUTO",
      "Valor": "Accesorio",
      "Imagen": "https://"
    },
    {
      "IdValorPA": "IDCATEGO-IDTECNO",
      "IdValorOK": "IDAUDIO",
      "Valor": "Audio",
      "Imagen": "https://"
    },
    {
      "IdValorPA": "IDCATEGO-IDROPA",
      "IdValorOK": "IDMUJER",
      "Valor": "Mujer",
      "Imagen": "https://"
    }
  ],
  "detail_row": {
    "Activo": "S",
    "Borrado": "N",
    "detail_row_reg": [
      {
        "FechaReg": {
          "$date": "2022-04-30T00:00:00.628Z"
        },
        "UsuarioReg": "FIBARRAC"
      }
    ]
  }
} */
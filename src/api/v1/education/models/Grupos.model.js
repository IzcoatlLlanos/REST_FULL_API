import * as mongoose from 'mongoose';

const gruposSchema = new mongoose.Schema({
    IdGrupoPK: { type : Number, required: true },
    IdGrupoOK: { type : String },
    IdGrupoBK: { type : String} ,
    IdPeriodoOK: { type : String },
    IdInstitutoOK: { type : String },
    IdCarreraOK: { type : String },
    IdProgramaOK: { type : String },
    IdReticulaOK: { type : String },
    IdAsignaturaOK: { type : String },
    IdPersonaOK: { type : String },
    IdRolOK: { type : String },
    Grupo: { type : String },
    Capacidad: { type : Number },
    IdTipoCursoOK: {type : String },
    IdCursoOK: { type : String },
    Curso: { type : String },
    IdTipoGradoAcaOK: {type : String },
    IdGradoAcaOK: { type : String },
    GradoAca: { type : String },
    IdTipoHorarioOK: { type : String },
    IdHorarioOK: { type : String },
    Horario: { type : String },
    grupos_estatus: [{
        id: false,
        IdTipoEstatusOK: { type : String },
        IdEstatusOK: { type : String },
        Estatus: { type : String },
        Actual: { type : String },
        detail_row: {
            id: false,
            Activo: { type : String, default : "S"},
            Borrado: { type : String, default : "N"},
            detail_row_reg: [{
                FechaReg: { type : Date, default : Date.now },
                UsuarioReg: { type : String }
            }]
        }
    }],
    grupos_horarios: [{
        id: false,
        IdDiaOK: { type : String },
        IdDiaBK: { type : String },
        Dia: { type : String },
        Alias: { type : String },
        HoraEntrada: { type : String },
        HoraSalida: { type : String },
        ToleranciaEntrada: { type : Number },
        ToleranciaSalida: { type : Number },
        IdEdificioOK: { type : String },
        IdEspacioOK: { type : String },
        detail_row: {
            id: false,
            Activo: { type : String, default : "S"},
            Borrado: { type : String, default : "N"},
            detail_row_reg: [{
                FechaReg: { type : Date, default : Date.now },
                UsuarioReg: { type : String }
            }]
        }
    }],
    grupos_personas: [{
        IdPersonaOK: { type : String },
        IdRolOK: { type: String },
        NumPeriodo: { type: String },
        Repite: { type: String },
        detail_row: {
            id: false,
            Activo: { type : String, default : "S"},
            Borrado: { type : String, default : "N"},
            detail_row_reg: [{
                FechaReg: { type : Date, default : Date.now },
                UsuarioReg: { type : String }
            }]
        }
    }],
    detail_row: {
        id: false,
        Activo: { type : String, default : "S"},
        Borrado: { type : String, default : "N"},
        detail_row_reg: [{
            FechaReg: { type : Date, default : Date.now },
            UsuarioReg: { type : String }
        }]
    }
});

export default mongoose.model(
    'cat_grupos',
    gruposSchema,
    'cat_grupos'
)
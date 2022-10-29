import { sequelize } from '../../db';
import { DataTypes, Model } from 'sequelize';
import { ModelAsistenciaT } from './';
export class AsistenciaModel extends Model<any, ModelAsistenciaT> {}

AsistenciaModel.init(
	{
		id_asistencia: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
		},
		id_plan_participante: { type: DataTypes.BIGINT },
		fecha_sesion: { type: DataTypes.DATE },
		fecha_asis: { type: DataTypes.DATE },
		fecha_termino: { type: DataTypes.DATE },
		estado: { type: DataTypes.STRING(10) },
		nota: { type: DataTypes.INTEGER },
		horas: { type: DataTypes.NUMBER },
		evidencia: { type: DataTypes.STRING },
	},
	{ sequelize, modelName: 'asistencia' }
);

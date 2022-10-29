import { sequelize } from '../../db';
import { Model, DataTypes } from 'sequelize';
import { ModelPlan_sesionT} from '.';

export class ModelPlan_sesion extends Model<any, ModelPlan_sesionT> {}

ModelPlan_sesion.init(
	{
		id_plan_sesion: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		id_carga_plan: { type: DataTypes.BIGINT},
	    detalle: { type: DataTypes.CHAR },
	    fecha_sesion: { type: DataTypes.DATE },
		fin_sesion: { type: DataTypes.DATE },
		horas: { type: DataTypes.NUMBER },
		evidencia: { type: DataTypes.CHAR },
	},
	{ sequelize, modelName: 'plan_sesion' }
);

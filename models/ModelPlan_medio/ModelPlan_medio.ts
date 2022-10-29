import { sequelize } from '../../db';
import { Model, DataTypes } from 'sequelize';
import { ModelPlan_medioT } from '.';

export class ModelPlan_medio extends Model<any, ModelPlan_medioT> {}

ModelPlan_medio.init(
	{
		id_plan: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		id_escuela_sucursa: { type: DataTypes.NUMBER},
	    id_vinculacion: { type: DataTypes.NUMBER},
	    
	},
	{ sequelize, modelName: 'plan_medio' }
);

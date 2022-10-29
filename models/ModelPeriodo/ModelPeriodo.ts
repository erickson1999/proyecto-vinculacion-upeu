import { sequelize } from '../../db';
import { Model, DataTypes } from 'sequelize';
import { ModelPeriodoT } from '.';

export class ModelPeriodo extends Model<any, ModelPeriodoT> {}

ModelPeriodo.init(
	{
		id_periodo: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		nombre: { type: DataTypes.INTEGER},
	    estado: { type: DataTypes.CHAR },
	},
	{ sequelize, modelName: 'periodo' }
);

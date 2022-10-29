import { sequelize } from '../../db';
import { Model, DataTypes } from 'sequelize';
import { ModelFacultadT } from '.';

export class ModelFacultad extends Model<any, ModelFacultadT> {}

ModelFacultad.init(
	{
		id_facultad: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		nombre: { type: DataTypes.CHAR(50)},
	    estado: { type: DataTypes.CHAR },
	    alias: { type: DataTypes.CHAR(30) },
	},
	{ sequelize, modelName: 'facultad' }
);

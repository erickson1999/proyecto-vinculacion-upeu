import { sequelize } from '../../db';
import { Model, DataTypes } from 'sequelize';
import { ModelEscuelaT } from '.';

export class ModelEscuela extends Model<any, ModelEscuelaT> {}

ModelEscuela.init(
	{
		id_escuela: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		nombre: { type: DataTypes.CHAR(50)},
	    estado: { type: DataTypes.CHAR },
	    id_facultad: { type: DataTypes.BIGINT },
	},
	{ sequelize, modelName: 'escuela' }
);

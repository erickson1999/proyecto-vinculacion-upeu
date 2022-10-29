import { sequelize } from '../../db';
import { Model, DataTypes } from 'sequelize';
import { ModelRolT } from '.';

export class ModelRol extends Model<any, ModelRolT> {}

ModelRol.init(
	{
		id_rol: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		nombre: { type: DataTypes.CHAR(40)},
	    estado: { type: DataTypes.CHAR(10) },    
	},
	{ sequelize, modelName: 'rol' }
);

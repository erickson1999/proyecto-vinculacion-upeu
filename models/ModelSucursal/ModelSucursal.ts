import { sequelize } from '../../db';
import { Model, DataTypes } from 'sequelize';
import { ModelSucursalT } from '.';

export class ModelSucursal extends Model<any, ModelSucursalT> {}

ModelSucursal.init(
	{
		id_sucursal: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		nombre: { type: DataTypes.CHAR },
	    estado: { type: DataTypes.CHAR },
	    
	},
	{ sequelize, modelName: 'sucursal' }
);

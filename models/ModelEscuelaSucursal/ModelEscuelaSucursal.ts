import { sequelize } from '../../db';
import { Model, DataTypes } from 'sequelize';
import { ModelEscuelaSucursalT } from '.';

export class ModelEscuelaSucursal extends Model<any, ModelEscuelaSucursalT> {}

ModelEscuelaSucursal.init(
	{
		id_escuela_sucursa: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		id_escuela: { type: DataTypes.NUMBER},
	    id_sucursal: { type: DataTypes.NUMBER },
	    estado: { type: DataTypes.CHAR(20) },
	},
	{ sequelize, modelName: 'escuela_sucursal' }
);

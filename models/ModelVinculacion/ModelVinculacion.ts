import { sequelize } from '../../db';
import { Model, DataTypes } from 'sequelize';
import { ModelVinculacionT } from '.';

export class ModelVinculacion extends Model<any, ModelVinculacionT> {}

ModelVinculacion.init(
	{
		id_vinculacion: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		nombre: { type: DataTypes.CHAR(50)},
	    detalle: { type: DataTypes.CHAR },
	    tipo: { type: DataTypes.CHAR },
		archivo: { type: DataTypes.CHAR},
		estado: { type: DataTypes.CHAR},
		
		
	},
	{ sequelize, modelName: 'vinculacion' }
);

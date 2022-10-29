import { sequelize } from '../../db';
import { Model, DataTypes } from 'sequelize';
import { ModelPersona_rolT } from '.';

export class ModelPersona_rol extends Model<any, ModelPersona_rolT> {}

ModelPersona_rol.init(
	{
		id_persona_rol: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		id_persona: { type: DataTypes.BIGINT},
	    id_rol: { type: DataTypes.BIGINT },
	    estado: { type: DataTypes.CHAR  },
	},
	{ sequelize, modelName: 'persona_rol' }
);

import { sequelize } from '../../db';
import { Model, DataTypes } from 'sequelize';
import { ModelPersonaRolT } from '.';

export class ModelPersonaRol extends Model<any, ModelPersonaRolT> {}

ModelPersonaRol.init(
	{
		id_persona_rol: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		id_persona: { type: DataTypes.BIGINT },
		id_rol: { type: DataTypes.BIGINT },
		estado: { type: DataTypes.CHAR },
	},
	{ sequelize, modelName: 'persona_rol' }
);

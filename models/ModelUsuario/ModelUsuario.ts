import { sequelize } from '../../db';
import { Model, DataTypes } from 'sequelize';
import { ModelUsuarioT } from '.';

export class ModelUsuario extends Model<any, ModelUsuarioT> {}

ModelUsuario.init(
	{
		id_persona: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		usuario: { type: DataTypes.CHAR, allowNull: false },
		password: { type: DataTypes.CHAR, allowNull: false },
	},
	{ sequelize, modelName: 'usuario' }
);

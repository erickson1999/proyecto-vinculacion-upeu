import { sequelize } from '../../db';
import { Model, DataTypes } from 'sequelize';
import { ModelGrupoT } from '.';

export class ModelGrupo extends Model<any, ModelGrupoT> {}

ModelGrupo.init(
	{
		id_grupo: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		nombre: { type: DataTypes.CHAR(50)},
	    estado: { type: DataTypes.CHAR (20)},
	    alias: { type: DataTypes.CHAR(10) },
	},
	{ sequelize, modelName: 'grupo' }
);

import { sequelize } from '../../db';
import { Model, DataTypes } from 'sequelize';
import { ModelParticipanteT } from '.';

export class ModelParticipante extends Model<any, ModelParticipanteT> {}

ModelParticipante.init(
	{
		id_persona: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		nombre: { type: DataTypes.INTEGER},
	    estado: { type: DataTypes.NUMBER},

	},
	{ sequelize, modelName: 'Participante' }
);

import { sequelize } from '../../db';
import { DataTypes, Model } from 'sequelize';
import { ModelPersonaT } from '.';
import { ModelUsuario } from '../ModelUsuario';

export class ModelPersona extends Model<any, ModelPersonaT> {}

ModelPersona.init(
	{
		id_persona: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		nombre: { type: DataTypes.CHAR(50) },
		appaterno: { type: DataTypes.CHAR(50) },
		apmaterno: { type: DataTypes.CHAR(50) },
		dni: { type: DataTypes.NUMBER({ length: 10 }) },
		direccion: { type: DataTypes.CHAR(200) },
		correo: {
			type: DataTypes.CHAR(200),
			validate: { isEmail: { msg: 'El correo ingresado no es valido' } },
		},
		numero: {
			type: DataTypes.NUMBER({ length: 10 }),
			validate: { isNumeric: { msg: 'El numero ingresado no es valido' } },
		},
		fecha_registro: {
			type: DataTypes.DATE,
			validate: {
				isDate: { msg: 'La fecha ingresada no valido', args: true },
			},
		},
	},
	{ sequelize, modelName: 'persona', timestamps: false }
);

ModelPersona.hasOne(ModelUsuario, {
	foreignKey: 'id_persona',
	sourceKey: 'id_persona',
});

ModelUsuario.belongsTo(ModelPersona, {
	foreignKey: 'id_persona',
	targetKey: 'id_persona',
});

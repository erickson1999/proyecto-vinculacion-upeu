import { sequelize } from '../../db';
import { DataTypes, Model } from 'sequelize';
import { ModelPersonaT } from '.';

class ModelPersona extends Model<any, ModelPersonaT> {}

ModelPersona.init(
	{
		id_persona: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
		},
		nombre: { type: DataTypes.CHAR(100) },
		appaterno: { type: DataTypes.CHAR(100) },
		apmaterno: { type: DataTypes.CHAR(100) },
		dni: { type: DataTypes.NUMBER({ length: 10 }) },
		direccion: { type: DataTypes.CHAR(200) },
		correo: {
			type: DataTypes.CHAR(200),
			validate: { isEmail: { msg: 'El correo ingresado no es valido' } },
		},
		numero: {
			type: DataTypes.NUMBER({ length: 15 }),
			validate: { isNumeric: { msg: 'El numero ingresado no es valido' } },
		},
		fecha_registro: {
			type: DataTypes.DATE,
			validate: {
				isDate: { msg: 'La fecha ingresada no valido', args: true },
			},
		},
		usuario: { type: DataTypes.CHAR(200) },
		password: { type: DataTypes.CHAR(200) },
	},
	{ sequelize, modelName: 'persona' }
);

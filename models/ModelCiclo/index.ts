import { sequelize } from '../../db';
import { DataTypes, Model } from 'sequelize';

type ModelCreationAttrCargaPlanT = {
	id_carga_plan: number;
	id_persona: number;
	id_periodo: number;
	id_modalidad: number;
	id_plan: number;
	id_ciclo: number;
	id_grupo: number;
	estado: string;
	fecha_inicio: Date;
	fecha_fin: Date;
	horas: number;
	tolerancia: number;
};

export class CargaPlanModel extends Model<any, ModelCreationAttrCargaPlanT> {}

CargaPlanModel.init(
	{
		id_carga_plan: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
		},
		id_persona: {
			type: DataTypes.BIGINT,
		},
		id_periodo: {
			type: DataTypes.BIGINT,
		},
		id_modalidad: {
			type: DataTypes.BIGINT,
		},
		id_plan: {
			type: DataTypes.BIGINT,
		},
		id_ciclo: {
			type: DataTypes.BIGINT,
		},
		id_grupo: {
			type: DataTypes.BIGINT,
		},
		estado: {
			type: DataTypes.STRING,
		},
		fecha_inicio: {
			type: DataTypes.DATE,
		},
		fecha_fin: {
			type: DataTypes.DATE,
		},
		horas: {
			type: DataTypes.NUMBER,
		},
		tolerancia: {
			type: DataTypes.NUMBER,
		},
	},
	{ sequelize, modelName: 'ciclo' }
);

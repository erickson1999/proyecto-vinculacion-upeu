import { DataTypes, Model, StringDataType } from 'sequelize';
import { sequelize } from '../db';

type categoriaModelT = {
	id?: number;
	nombre: string;
};

export const categoriaModel = sequelize.define<Model<any, categoriaModelT>>(
	'categorias',
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		nombre: { type: DataTypes.STRING },
	}
);

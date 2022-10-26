import {
	Model,
	DataTypes,
	NumberDataType,
	Attributes,
	InitOptions,
	ModelAttributes,
	ModelStatic,
	Optional,
} from 'sequelize';
import { sequelize } from '../db';

interface test {
	id: number;
	password: string;
	dia: number;
}

class UserModel extends Model<test> {
	public static encryptPassword() {
		console.log('password encrypted');
	}
}

export const user = UserModel.init(
	{
		id: { type: DataTypes.STRING },
		password: { type: DataTypes.STRING },
		dia: { type: DataTypes.STRING },
	},
	{ sequelize }
);

user.create({
	id: 20,
	password: 'string',
	dia: 24,
});

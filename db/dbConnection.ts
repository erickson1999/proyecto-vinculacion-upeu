import { Sequelize } from 'sequelize';

const dbConfig = {
	name: process.env.DB_NAME,
	user: process.env.DB_USER,
	pass: process.env.DB_PASS || '',
	host: process.env.DB_HOST,
};

if (!dbConfig.name) {
	throw new Error('No ingreso un nombre de db, agrégelo en el archivo .env');
}
if (!dbConfig.user) {
	throw new Error('No ingreso un usuario de db, agrégelo en el archivo .env');
}
if (!dbConfig.host) {
	throw new Error('No ingreso un host de db, agrégelo en el archivo .env');
}

export const sequelize = new Sequelize(
	dbConfig.name,
	dbConfig.user,
	dbConfig.pass,
	{
		host: dbConfig.host,
		dialect: 'postgres',
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
	}
);

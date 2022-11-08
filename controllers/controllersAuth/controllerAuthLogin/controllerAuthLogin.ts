import { NextApiResponse } from 'next';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { ModelPersonaT, ModelUsuario, ModelUsuarioT } from '../../../models';
import { jwtConfig } from '../../../utils';

type ResponseApi = {
	ok: boolean;
	message: string;
	data?: ModelPersonaT[];
	token?: string;
};

export const controllerAuthLogin = async (
	res: NextApiResponse<ResponseApi>,
	body: ModelUsuarioT
) => {
	if (!process.env.TOKEN_SECRET) {
		throw new Error(
			'el TOKEN_SECRET no existe en el archivo .env, agregue uno'
		);
	}
	try {
		const user = await ModelUsuario.findAll({
			where: { usuario: body.usuario },
		});

		if (user.length === 0) {
			return res
				.status(404)
				.json({ ok: false, message: 'el usuario no existe' });
		}

		const userJSON: ModelUsuarioT = user[0].toJSON();
		
		const match = await bcrypt.compare(body.password, userJSON.password);

		if (!match) {
			return res.status(400).json({
				ok: false,
				message: 'el usuario o la contraseña es incorrecta',
			});
		}

		const token = jwt.sign(
			{ id: userJSON.id_persona },
			process.env.TOKEN_SECRET,
			{
				expiresIn: jwtConfig.expiresIn,
			}
		);
		res.json({ ok: true, message: 'inicio de sesión éxitoso', token });
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			ok: false,
			message: 'ocurrio un error inesperado, inténtelo nuevamente',
		});
	}
};

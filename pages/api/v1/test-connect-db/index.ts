import { NextApiRequest, NextApiResponse } from 'next';
import { sequelize } from '../../../../db';
type ResponseApi =
	| {
			message: string;
	  }
	| { message: string; error: any };

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<ResponseApi>
) => {
	if (process.env.NODE_ENV !== 'development') {
		return res.status(404).redirect('/_404');
	}

	const { method } = req;
	const metodosPermitidos = ['GET'];
	if (!method) {
		return res.status(400).json({ message: 'Enviar un método válido' });
	}
	if (!metodosPermitidos.includes(method)) {
		return res.status(400).json({
			message: `El método ${method} no está habilitado para este recurso`,
		});
	}
	try {
		await sequelize.authenticate();
		return res.status(200).json({ message: 'Conexion exitosa' });
	} catch (error: any) {
		console.error(error);
        //ya conecta la db de paxi
		return res.status(200).json({
			message: 'Error de conexión a la database',
			error: error.message,
		});
	}
};
export default handler;

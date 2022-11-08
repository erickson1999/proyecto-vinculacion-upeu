import { NextApiRequest, NextApiResponse } from 'next';
import { sequelize } from '../../../../db';
// import '../../../../models/categorias';
type InitsResponseT =
	| {
			message: string;
	  }
	| { message: string; error: any };

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<InitsResponseT>
) => {
	if (process.env.NODE_ENV !== 'development') {
		return res
			.status(400)
			.json({ message: 'Este end-point es válido solo en desarrollo' });
	}
	const { method } = req;
	const availableMethods = ['GET'];
	if (!method) {
		return res.status(400).json({ message: 'Es necesario enviar un método' });
	}
	if (!availableMethods.includes(method!)) {
		return res.status(400).json({
			message: `El método ${method} no está habilitado para este recurso`,
		});
	}
	try {
		sequelize.sync();
		return res
			.status(200)
			.json({ message: 'Sincronización de la db realizada con éxito' });
	} catch (error) {
		return res.status(500).json({ message: 'Ocurrio un error inesperado' });
	}
};

export default handler;

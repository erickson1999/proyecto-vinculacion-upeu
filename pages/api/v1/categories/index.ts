import { NextApiRequest, NextApiResponse } from 'next';
import { categoriaModel } from '../../../../models';
type CategoriesResponseT = {
	data: any;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { nombre } = req.body;
    console.log({nombre})
	const newCategory = await categoriaModel.create({
		nombre,
	});

	return res.status(200).json({ data: newCategory });
};
export default handler;

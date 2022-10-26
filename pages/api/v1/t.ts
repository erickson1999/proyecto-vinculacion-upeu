import { NextApiRequest, NextApiResponse } from 'next';

import bcrypt from 'bcrypt';

type ResponseApi = {
	result: string;
};

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<ResponseApi>
) => {
	const saltRounds = 10;

	const pass: string = 'micontra';

	bcrypt.genSalt(saltRounds, (err, salt) => {
		bcrypt.hash(pass, salt, (err, hash) => {
			bcrypt.compare("micontra", hash, (err, result) => {
				console.log({ result });
			});
		});
	});

	res.status(200).json({ result: '' });
};
export default handler;

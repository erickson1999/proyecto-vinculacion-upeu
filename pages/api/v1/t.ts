import { NextApiRequest, NextApiResponse } from 'next';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
type ResponseApi = {
	result: any;
};

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<ResponseApi>
) => {
	const { body } = req;
	const verifyToken = jwt.verify(body.token, process.env.TOKEN_SECRET!);

	// const saltRounds = 10;

	// const pass: string = 'micontra';

	// bcrypt.genSalt(saltRounds, (err, salt) => {
	// 	bcrypt.hash(pass, salt, (err, hash) => {
	// 		bcrypt.compare("micontra", hash, (err, result) => {
	// 			console.log({ result });
	// 		});
	// 	});
	// });

	res.status(200).json({ result: verifyToken });
};
export default handler;

import { NextApiRequest } from 'next';
import Error from './ErrorObj';

type RequestMethodsT = 'GET' | 'POST' | 'PUT' | 'DELETE';

type validateDataRequesT = {
	method: RequestMethodsT;
};

export const getDataRequest = (
	req: NextApiRequest
): validateDataRequesT => {
	if (!req.method) {
		const errorObj = { status: 400, msgError: 'No se envió un método' };
		throw Error.generate(errorObj);
	}

	const { method } = req;

	return { method: method as RequestMethodsT };
};

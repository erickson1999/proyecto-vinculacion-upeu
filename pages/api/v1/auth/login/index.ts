import { NextApiRequest, NextApiResponse } from 'next';
import { ErrorObj } from '../../../../../utils';
import { validateMethods } from '../../../../../utils/validations';
import { validateBody } from '../../../../../utils/validations/validateBody';
import { controllerAuthLogin } from '../../../../../controllers';
type ResponseApi = {
	ok: boolean;
	message: string;
};

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<ResponseApi>
) => {
	const { method, body } = req;
	const availableMethods = ['POST'];
	const bodyAttributes = ['usuario', 'password'];
	try {
		validateMethods(method, availableMethods);
		validateBody(body, bodyAttributes);
	} catch (error) {
		const { status, msgError } = ErrorObj.get(error);
		return res.status(status).json({ ok: false, message: msgError });
	}

	return controllerAuthLogin(res, body);
};
export default handler;

import { NextApiRequest, NextApiResponse } from 'next';
import { ErrorObj } from '../../../../../utils';
import { validateMethods } from '../../../../../utils/validations';
import { validateBody } from '../../../../../utils/validations/validateBody';
import { controllerAuthLogin } from '../../../../../controllers';
import { ModelPersonaT, ModelUsuarioT } from '../../../../../models';
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
		//validations
		validateMethods(method, availableMethods);
		const bodyJSON = validateBody(body, bodyAttributes);
		return await controllerAuthLogin(res, bodyJSON);
	} catch (error) {
		const { status, msgError } = ErrorObj.get(error);
		return res.status(status).json({ ok: false, message: msgError });
	}
};
export default handler;

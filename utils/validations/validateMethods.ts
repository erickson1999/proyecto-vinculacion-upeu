import { ErrorObj } from '..';


export const validateMethods = (
	method: string | undefined,
	availableMethods: string[]
) => {
	if (!method) {
		throw ErrorObj.generate({
			status: 400,
			msgError: 'enviar un método en la petición',
		});
	}
	if (!availableMethods.includes(method)) {
		throw ErrorObj.generate({
			status: 400,
			msgError: `el método ${method} no esta disponible en esta dirección`,
		});
	}
};

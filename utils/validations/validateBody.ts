import { ErrorObj } from '../ErrorObj';

export const validateBody = (body: string | Object, attributes: string[] = []): any => {
	let parserBody = body;
	if (!body) {
		throw ErrorObj.generate({
			status: 400,
			msgError: 'no se envió un body en la solicitud',
		});
	}
	if (typeof body !== 'object') {
		parserBody = JSON.parse(body);
	}

	if (attributes.length === 0) {
		return parserBody;
	}

	const keys = Object.keys(parserBody);
	if (keys.length === 0) {
		throw ErrorObj.generate({
			status: 400,
			msgError: 'el cuerpo de la solicitud esta vacío',
		});
	}

	const differentElements = attributes.filter((element) => {
		return !keys.includes(element);
	});
	if (differentElements.length > 0) {
		throw ErrorObj.generate({
			status: 400,
			msgError: `no se envió el campo "${differentElements[0]}"`,
		});
	}
	return parserBody;
};

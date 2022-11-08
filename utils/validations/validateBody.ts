import { ErrorObj } from '../ErrorObj';

export const validateBody = (json: Object, attributes: string[] = []) => {
	const keys = Object.keys(json);
	if (keys.length === 0) {
		throw ErrorObj.generate({
			status: 400,
			msgError: 'el cuerpo de la solicitud esta vacío',
		});
	}
	if(attributes.length === 0){
		return
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
};

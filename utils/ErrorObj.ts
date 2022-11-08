type ErrorT = { status: number; msgError: string };

export const ErrorObj = {
	generate: (errorObj: ErrorT): Error => {
		const errorStr = JSON.stringify(errorObj);
		return new Error(errorStr);
	},
	get: (error: any): ErrorT => {
		return JSON.parse(error.message);
	},
};

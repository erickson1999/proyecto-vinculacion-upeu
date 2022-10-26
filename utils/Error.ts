type ErrorT = { status: number; msgError: string };

const ApiError = {
	generate: (errorObj: ErrorT): Error => {
		const errorStr = JSON.stringify(errorObj);
		return new Error(errorStr);
	},
	get: (error: Error): ErrorT => {
		return JSON.parse(error.message);
	},
};

export default ApiError;

import bcrypt from 'bcrypt';

const encrypt = async (password: string, rounds = 10) => {
	return new Promise(async (resolve, reject) => {
		return bcrypt
			.hash(password, rounds)
			.then((value: string) => {
				resolve(value);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

const compare = (pass: string, hash: string) => {
	return bcrypt.compare(pass, hash, (err, result) => {
		if (err) {
			console.error(
				'🚀 ~ file: bcrypt.ts ~ line 18 ~ returnbcrypt.compare ~ err',
				err
			);
			throw new Error(
				'Ocurrio un error al generar al comparar la contraseña con el hash'
			);
		}
		return result;
	});
};

export { encrypt, compare };

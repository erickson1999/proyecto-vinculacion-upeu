import bcrypt from 'bcrypt';

const encrypt = (pass: string, rounds = 10) => {
	return bcrypt.hash(pass, rounds, function (err, hash): string {
		if (err) {
			console.error('🚀 ~ file: bcrypt.ts ~ line 6 ~ err', err);
			throw new Error('Ocurrio un error al generar el hash');
		}
		return hash;
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

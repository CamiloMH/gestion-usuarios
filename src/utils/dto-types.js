const { Type } = require('@sinclair/typebox')

const usernameDTO = Type.String({
	minLength: 3,
	maxLength: 40,
	errorMessage: {
		type: 'Username debe ser un string',
		minLength: 'Username debe tener al menos 3 caracteres',
		maxLength: 'Username no puede tener más de 40 caracteres',
		required: 'Username es requerido',
	},
})

const passwordDTO = Type.String({
	// password minimo 10 caracteres, maximo 20 y al menos una letra mayuscula, una minuscula y un número
	format: 'password',
	minLength: 10,
	maxLength: 20,
	errorMessage: {
		format:
			'Password debe tener al menos una letra mayuscula, una minuscula y un número',
		type: 'Password debe ser un string',
		minLength: 'Password debe tener al menos 10 caracteres',
		maxLength: 'Password no puede tener más de 20 caracteres',
	},
})

const emailDTO = Type.String({
	format: 'email',
	errorMessage: {
		type: 'Email debe ser un string',
		format: 'Email no es válido',
	},
})

const enableDTO = Type.Boolean({
	errorMessage: {
		type: 'enable debe ser un boolean',
	},
})

module.exports = {
	usernameDTO,
	passwordDTO,
	emailDTO,
	enableDTO,
}

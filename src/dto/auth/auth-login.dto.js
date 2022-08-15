const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const addErrors = require('ajv-errors')
const { Type } = require('@sinclair/typebox')
const { passwordDTO, usernameDTO } = require('../../utils/dto-types.js')

const loginDTOSchema = Type.Object(
	{
		username: usernameDTO,
		// password minimo 10 caracteres, maximo 20 y al menos una letra mayuscula, una minuscula y un número
		password: passwordDTO,
	},
	{
		additionalProperties: false,
		errorMessage: {
			additionalProperties: 'No debe haber campos adicionales',
		},
	}
)

const ajv = new Ajv({ allErrors: true })
// Custom format password
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)

addFormats(ajv).addKeyword('kind').addKeyword('modifier')
addErrors(ajv)

const validateSchemaLogin = ajv.compile(loginDTOSchema)

module.exports = validateSchemaLogin

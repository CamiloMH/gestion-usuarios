const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const addErrors = require('ajv-errors')
const { Type } = require('@sinclair/typebox')
const { emailDTO, passwordDTO, usernameDTO } = require('../../utils/dto-types.js')

const registerDTOSchema = Type.Object(
	{
		username: usernameDTO,
		password: passwordDTO,
		nombre: Type.String({
			minLength: 3,
			maxLength: 20,
			errorMessage: {
				type: 'Nombre debe ser un string',
				minLength: 'Nombre debe tener al menos 3 caracteres',
				maxLength: 'Nombre no puede tener más de 20 caracteres',
			},
		}),
		email: emailDTO,
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

addFormats(ajv, ['email']).addKeyword('kind').addKeyword('modifier')
addErrors(ajv)

const validateSchemaRegister = ajv.compile(registerDTOSchema)

module.exports = validateSchemaRegister

const Ajv = require('ajv')
const addErrors = require('ajv-errors')
const { Type } = require('@sinclair/typebox')
const { passwordDTO } = require('../../utils/dto-types')

const userPasswordDTO = Type.Object(
	{
		oldPassword: passwordDTO,
		newPassword: passwordDTO,
	},
	{
		additionalProperties: false,
		errorMessage: {
			additionalProperties: 'No debe haber campos adicionales',
		},
	}
)

const ajv = new Ajv({ allErrors: true })
	.addKeyword('kind')
	.addKeyword('modifier')
// Custom format password
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)
addErrors(ajv)

const validateSchemaUserPassword = ajv.compile(userPasswordDTO)

module.exports = validateSchemaUserPassword

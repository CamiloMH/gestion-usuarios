const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const addErrors = require('ajv-errors')
const { Type } = require('@sinclair/typebox')
const { emailDTO } = require('../../utils/dto-types.js')

const recoveryPasswordDTOSchema = Type.Object(
	{
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

addFormats(ajv, ['email']).addKeyword('kind').addKeyword('modifier')
addErrors(ajv)

const validateSchemaRecoveryPassword = ajv.compile(recoveryPasswordDTOSchema)

module.exports = validateSchemaRecoveryPassword

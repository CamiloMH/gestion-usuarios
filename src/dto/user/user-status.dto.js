const Ajv = require('ajv')
const addErrors = require('ajv-errors')
const { Type } = require('@sinclair/typebox')
const { enableDTO } = require('../../utils/dto-types')

const userEnableDTO = Type.Object(
	{
		enable: enableDTO,
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
ajv.addFormat('boolean')
addErrors(ajv)

const validateSchemaUserEnableDTO = ajv.compile(userEnableDTO)

module.exports = validateSchemaUserEnableDTO

const Ajv = require('ajv')
const addErrors = require('ajv-errors')
const { Type } = require('@sinclair/typebox')

const userDTOSchema = Type.Object(
	{
		nombre: Type.String({
			minLength: 3,
			maxLength: 20,
			errorMessage: {
				type: 'Nombre debe ser un string',
				minLength: 'Nombre debe tener al menos 3 caracteres',
				maxLength: 'Nombre no puede tener más de 20 caracteres',
			},
		}),
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
addErrors(ajv)

const validateSchemaUserUpdate = ajv.compile(userDTOSchema)

module.exports = validateSchemaUserUpdate

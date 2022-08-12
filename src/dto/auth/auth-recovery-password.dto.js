import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import addErrors from 'ajv-errors'
import { Type } from '@sinclair/typebox'
import { emailDTO } from '../../utils/dto-types.js'

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

export default validateSchemaRecoveryPassword

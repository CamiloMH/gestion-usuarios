import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import addErrors from 'ajv-errors'
import { Type } from '@sinclair/typebox'
import { emailDTO, passwordDTO, usernameDTO } from '../../utils/dto-types.js'

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

export default validateSchemaRegister

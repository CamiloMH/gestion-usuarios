import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import addErrors from 'ajv-errors'
import { Type } from '@sinclair/typebox'
import { passwordDTO, usernameDTO } from '../../utils/dto-types.js'

const loginDTOSchema = Type.Object({
	username: usernameDTO,
	// password minimo 10 caracteres, maximo 20 y al menos una letra mayuscula, una minuscula y un número
	password: passwordDTO,
})

const ajv = new Ajv({ allErrors: true })
// Custom format password
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)

addFormats(ajv).addKeyword('kind').addKeyword('modifier')
addErrors(ajv)

const validateSchemaLogin = ajv.compile(loginDTOSchema)

export default validateSchemaLogin

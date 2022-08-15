const { BadRequest } = require('../utils/errors.js')
const { validateSchemas } = require('../utils/validate-schemas.js')

const loginDTO = (req, res, next) => {
	const isValid = validateSchemas.login(req.body)
	if (!isValid)
		throw new BadRequest(
			validateSchemas.login.errors.map(error => error.message)
		)
	next()
}

const registerDTO = (req, res, next) => {
	const isValid = validateSchemas.register(req.body)
	if (!isValid)
		throw new BadRequest(
			validateSchemas.register.errors.map(error => error.message)
		)
	next()
}

const recoveryPasswordDTO = (req, res, next) => {
	const isValid = validateSchemas.recoveryPassword(req.body)
	if (!isValid)
		throw new BadRequest(
			validateSchemas.recoveryPassword.errors.map(error => error.message)
		)
	next()
}

module.exports = {
	loginDTO,
	registerDTO,
	recoveryPasswordDTO,
}

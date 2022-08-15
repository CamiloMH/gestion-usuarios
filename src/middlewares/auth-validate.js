const { BadRequest } = require('../utils/errors.js')
const { validateSchemas } = require('../utils/validate-schemas.js')

const loginDTO = (req, res, next) => {
	if (Object.keys(req.body).length === 0) throw new BadRequest('Body is empty')
	const isValid = validateSchemas.login(req.body)
	if (!isValid)
		throw new BadRequest(
			validateSchemas.login.errors.map(error => error.message)
		)
	next()
}

const registerDTO = (req, res, next) => {
	if (Object.keys(req.body).length === 0) throw new BadRequest('Body is empty')
	const isValid = validateSchemas.register(req.body)
	if (!isValid)
		throw new BadRequest(
			validateSchemas.login.errors.map(error => error.message)
		)
	next()
}

const recoveryPasswordDTO = (req, res, next) => {
	if (Object.keys(req.body).length === 0) throw new BadRequest('Body is empty')
	const isValid = validateSchemas.recoveryPassword(req.body)
	if (!isValid)
		throw new BadRequest(
			validateSchemas.login.errors.map(error => error.message)
		)
	next()
}

module.exports = {
	loginDTO,
	registerDTO,
	recoveryPasswordDTO,
}

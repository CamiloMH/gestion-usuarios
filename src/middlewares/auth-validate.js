const { validateSchemas } = require('../utils/validate-schemas.js')

const loginDTO = (req, res, next) => {
	const isValid = validateSchemas.login(req.body)
	if (!isValid)
		return res.status(400).json({
			errors: validateSchemas.login.errors.map(error => error.message),
		})

	next()
}

const registerDTO = (req, res, next) => {
	const isValid = validateSchemas.register(req.body)
	if (!isValid)
		return res.status(400).json({
			errors: validateSchemas.register.errors.map(error => error.message),
		})

	next()
}

const recoveryPasswordDTO = (req, res, next) => {
	const isValid = validateSchemas.recoveryPassword(req.body)
	if (!isValid)
		return res.status(400).json({
			errors: validateSchemas.recoveryPassword.errors.map(
				error => error.message
			),
		})

	next()
}

module.exports = {
	loginDTO,
	registerDTO,
	recoveryPasswordDTO,
}

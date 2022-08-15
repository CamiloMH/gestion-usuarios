const { validateSchemas } = require('../utils/validate-schemas.js')

const userUpdateDTO = (req, res, next) => {
	const isValid = validateSchemas.userUpdate(req.body)
	if (!isValid)
		return res.status(400).json({
			errors: validateSchemas.userUpdate.errors.map(error => error.message),
		})

	next()
}

module.exports = { userUpdateDTO }

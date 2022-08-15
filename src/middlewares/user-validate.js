const { BadRequest } = require('../utils/errors.js')
const { validateSchemas } = require('../utils/validate-schemas.js')

const userUpdateDTO = (req, res, next) => {
	const isValid = validateSchemas.userUpdate(req.body)
	if (!isValid)
		throw new BadRequest(
			validateSchemas.login.errors.map(error => error.message)
		)
	next()
}

module.exports = { userUpdateDTO }

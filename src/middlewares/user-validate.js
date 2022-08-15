const { BadRequest } = require('../utils/errors.js')
const { validateSchemas } = require('../utils/validate-schemas.js')

const userUpdateDTO = (req, res, next) => {
	if (Object.keys(req.body).length === 0) throw new BadRequest('Body is empty')
	const isValid = validateSchemas.userUpdate(req.body)
	if (!isValid)
		throw new BadRequest(
			validateSchemas.login.errors.map(error => error.message)
		)
	next()
}

module.exports = { userUpdateDTO }

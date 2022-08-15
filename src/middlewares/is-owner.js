const { ROLE_ADMIN } = require('../constants/role')
const { BadRequest } = require('../utils/errors')

const isOwner = (req, res, next) => {
	if (req.role !== ROLE_ADMIN) {
		const { id } = req.params
		if (id !== req.id) throw new BadRequest('Unauthorized')
	}
	next()
}

module.exports = isOwner

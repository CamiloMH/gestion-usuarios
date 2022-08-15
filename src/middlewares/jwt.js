const { jwtVerify } = require('jose')
const { Unauthorized } = require('../utils/errors')

const JWT = async (req, res, next) => {
	try {
		const { authorization } = req.headers
		if (!authorization) throw new Unauthorized('No token provided')
		const [, token] = authorization.split(' ') // authorization: 'Bearer <token>'
		const encoder = new TextEncoder()
		const { payload } = await jwtVerify(
			token,
			encoder.encode(process.env.JWT_SECRET)
		)
		if (!payload) throw new Unauthorized('Invalid token')
		req.id = payload.id
		next()
	} catch (error) {
		next(error)
	}
}

module.exports = { JWT }

const { jwtVerify } = require('jose')

const JWT = async (req, res, next) => {
	const { authorization } = req.headers
	if (!authorization)
		return res.status(401).send({ error: 'No token provided' })

	try {
		const [, token] = authorization.split(' ') // authorization: 'Bearer <token>'
		const { payload } = await jwtVerify(token, process.env.JWT_SECRET)
		req.id = payload.id

		next()
	} catch (error) {
		return res.status(401).send({ error: 'Token invalid' })
	}
}

module.exports = { JWT }

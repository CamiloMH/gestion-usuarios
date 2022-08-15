const { Op } = require('sequelize')
const { User } = require('../db/models')

const register = async (req, res) => {
	const { username, nombre, email, password } = req.body

	// Existe usuario con el mismo email o username?
	const user = await User.findOne({
		where: {
			[Op.or]: [{ username }, { email }],
		},
	})
	console.log({ user })

	res.send('Register')
}

const login = (req, res) => {
	res.send('Login')
}

const recoveryPassword = (req, res) => {
	res.send('RecoveryPassword')
}

module.exports = {
	register,
	login,
	recoveryPassword,
}

const { Op } = require('sequelize')
const { User } = require('../db/models')
const { hash, compare } = require('bcrypt')
const { SignJWT } = require('jose')
const { BadRequest, Conflict } = require('../utils/errors')

const register = async (req, res, next) => {
	const { username, nombre, email, password } = req.body
	try {
		// Validar que el username y el email no existan en la base de datos
		const getUser = await User.findOne({
			where: { [Op.or]: [{ username }, { email }] },
		})
		if (getUser) throw new Conflict('User already exists') // Si existe, retornar error
		const hashedPassword = await hash(password, 10) // Encriptar password
		const user = new User({
			username,
			nombre,
			email,
			enable: true,
			password: hashedPassword,
		})
		await user.save() // Guardar usuario en la base de datos
		res.status(201).json({ status: 'OK', message: 'User created' })
	} catch (error) {
		next(error)
	}
}

const login = async (req, res, next) => {
	const { username, password } = req.body
	try {
		const user = await User.findOne({ where: { username } }) // Buscar el usuario en la base de datos
		if (!user) throw new BadRequest('Credentials incorrect') // Si no existe el usuario, retornar error

		const checkPassword = await compare(password, user.password) // Comparar password con el hash de la base de datos
		if (!checkPassword) throw new BadRequest('Credentials incorrect') // Si no coinciden, retornar error

		const payload = new SignJWT({ id: user.id }) // Crear payload con el id del usuario

		const encoder = new TextEncoder()
		const token = await payload
			.setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
			.setIssuedAt()
			.setExpirationTime('1d')
			.sign(encoder.encode(process.env.JWT_SECRET))

		res.status(200).json({ status: 'OK', message: token }) // Si coinciden, retornar mensaje de login exitoso
	} catch (error) {
		next(error)
	}
}

const recoveryPassword = (req, res) => {
	res.send('RecoveryPassword')
}

module.exports = {
	register,
	login,
	recoveryPassword,
}

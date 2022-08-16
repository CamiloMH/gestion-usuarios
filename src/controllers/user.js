const { compare, hash } = require('bcrypt')
const SALT = require('../constants/salt')
const { User } = require('../db/models')
const isActive = require('../utils/active')
const { BadRequest } = require('../utils/errors')
const { getPagination, getPagingData } = require('../utils/pagination')

const getUsers = async (req, res, next) => {
	const { page, size, active } = req.query // page: 0, size: 2
	try {
		const { limit, offset } = getPagination(page, size) // limit: 2, offset: 0
		const where = isActive(active)
		const users = await User.findAndCountAll({
			limit,
			offset,
			where,
		}) // { count: 2, rows: [{}, {}] }
		const response = getPagingData(users, page, limit)
		res.json(response) // { totalItems: 2, data: [{}, {}], totalPages: 1, currentPage: 0 }
	} catch (error) {
		next(error)
	}
}

const getUser = async (req, res, next) => {
	const { id } = req.params
	try {
		const user = await User.findOne({ where: { enable: true, id } })
		res.json(user)
	} catch (error) {
		next(error)
	}
}

const updateUser = async (req, res, next) => {
	const { nombre } = req.body
	const { id } = req.params
	try {
		const user = await User.findOne({ where: { enable: true, id } })
		if (!user) throw new BadRequest('User not found')

		user.nombre = nombre
		user.updatedAt = new Date()

		await user.save()
		res.status(201).json({ status: 'OK', message: 'User updated' })
	} catch (error) {
		next(error)
	}
}

const updatePassword = async (req, res, next) => {
	const { oldPassword, newPassword } = req.body
	const { id } = req.params
	try {
		const user = await User.findOne({ where: { enable: true, id } })
		if (!user) throw new BadRequest('User not found')

		const checkPassword = await compare(oldPassword, user.password) // Comparar password con el hash de la base de datos
		if (!checkPassword) throw new BadRequest('Credentials incorrect') // Si no coinciden, retornar error

		const hashedPassword = await hash(newPassword, SALT) // Encriptar password

		user.password = hashedPassword
		user.updatedAt = new Date()

		await user.save()
		res.status(201).json({ status: 'OK', message: 'Password updated' })
	} catch (error) {
		next(error)
	}
}

const changeStatusUser = async (req, res, next) => {
	const { id } = req.params
	const { enable } = req.body
	try {
		const user = await User.findOne({ where: { id } })
		if (!user) throw new BadRequest('User not found')

		user.enable = enable
		user.updatedAt = new Date()

		await user.save()
		res
			.status(201)
			.json({
				status: 'OK',
				message: enable ? 'User activated' : 'User deactivated',
			})
	} catch (error) {
		next(error)
	}
}

module.exports = {
	getUsers,
	getUser,
	updateUser,
	updatePassword,
	changeStatusUser,
}

const { Router } = require('express')
const {
	deleteUser,
	getUser,
	getUsers,
	updateUser,
} = require('../controllers/user.js')
const { JWT } = require('../middlewares/jwt.js')
const { userUpdateDTO } = require('../middlewares/user-validate.js')

const router = Router()

/**
 * @api {get} /user Obtener todos los usuarios
 */
router.get('/', JWT, getUsers)

/**
 * @api {get} /user/:id Obtener un usuario por id
 */
router.get('/:id', JWT, getUser)

/**
 * @api {put} /user/:id Actualizar un usuario por id
 */
router.put('/:id', JWT, userUpdateDTO, updateUser)

/**
 * @api {delete} /user/:id Eliminar un usuario por id
 */
router.delete('/:id', JWT, deleteUser)

module.exports = router

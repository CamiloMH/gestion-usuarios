const { Router } = require('express')
const {
	changeStatusUser,
	getUser,
	getUsers,
	updateUser,
	updatePassword,
} = require('../controllers/user.js')
const isOwner = require('../middlewares/is-owner.js')
const { JWT, roleAdmin } = require('../middlewares/jwt.js')
const {
	userUpdateDTO,
	userPasswordDTO,
	userEnableDTO,
} = require('../middlewares/user-validate.js')

const router = Router()

/**
 * @api {get} /user Obtener todos los usuarios
 */
router.get('/', JWT, roleAdmin, getUsers)

/**
 * @api {get} /user/:id Obtener un usuario por id
 */
router.get('/:id', JWT, isOwner, getUser)

/**
 * @api {put} /user/:id Actualizar un usuario por id
 */
router.put('/:id', JWT, isOwner, userUpdateDTO, updateUser)

/**
 *	@api {patch} /user/:id Cambiar contraseña
 */
router.patch('/:id', JWT, isOwner, userPasswordDTO, updatePassword)

/**
 * @api {delete} /user/:id Eliminar un usuario por id
 */
router.patch(
	'/change-status/:id',
	JWT,
	roleAdmin,
	userEnableDTO,
	changeStatusUser
)

module.exports = router

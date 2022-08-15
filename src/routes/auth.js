const { Router } = require('express')
const { login, recoveryPassword, register } = require('../controllers/auth.js')
const {
	loginDTO,
	recoveryPasswordDTO,
	registerDTO,
} = require('../middlewares/auth-validate.js')

const router = Router()

/**
 * @api {post} /auth/register Registrar un usuario
 */
router.post('/register', registerDTO, register)

/**
 * @api {post} /auth/login Login de un usuario
 */
router.post('/login', loginDTO, login)

/**
 * @api {post} /auth/recovery-password Recuperar contraseña
 */
router.post('/recovery-password', recoveryPasswordDTO, recoveryPassword)

module.exports = router

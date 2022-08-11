import { Router } from 'express'
import { login, recoveryPassword, register } from '../controllers/auth.js'
import {
	loginDTO,
	recoveryPasswordDTO,
	registerDTO,
} from '../middlewares/user-validate.js'

const authRouter = Router()

/**
 * @api {post} /auth/register Registrar un usuario
 */
authRouter.post('/register', registerDTO, register)

/**
 * @api {post} /auth/login Login de un usuario
 */
authRouter.post('/login', loginDTO, login)

/**
 * @api {post} /auth/recovery-password Recuperar contraseña
 */
authRouter.post('/recovery-password', recoveryPasswordDTO, recoveryPassword)

export default authRouter

import { Router } from 'express'
import { register } from '../controllers/auth.js'

const authRouter = Router()

authRouter.post('/', register)

export default authRouter

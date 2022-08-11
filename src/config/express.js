import authRouter from '../routes/auth.routes.js'
import express from 'express'

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/auth', authRouter)

export default app

import express, { application } from 'express'

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api', require('./routes'))
export default app

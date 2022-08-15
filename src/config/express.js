const express = require('express')
const handleErrors = require('../middlewares/handle-errors')

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes dynamic
app.use('/api', require('../routes'))

// Error handler
app.use(handleErrors)

module.exports = app

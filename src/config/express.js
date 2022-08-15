const express = require('express')

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes dynamic
app.use('/api', require('../routes'))

module.exports = app

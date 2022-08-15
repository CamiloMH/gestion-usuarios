const express = require('express')
const router = express.Router()
const fs = require('fs')
const { NotFound } = require('../utils/errors')

const PATH_ROUTES = __dirname

const removeExtension = fileName => {
	return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter(file => {
	const name = removeExtension(file)
	if (name !== 'index') {
		router.use(`/${name}`, require(`./${file}`))
	}
	return false
})

// Manejador general de errores 404 (al final del listado de rutas de los endpoints)
router.use((req, res) => {
	throw new NotFound('not found')
})

module.exports = router

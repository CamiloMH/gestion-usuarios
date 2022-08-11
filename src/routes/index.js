const express = require('express')
const router = express.Router()
const fs = require('fs')

const PATH_ROUTES = __dirname

const removeExtension = (fileName) => {
  return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file)
  if (name !== 'index') {
    router.use(`/${name}`, require(`./${file}`))
  }
  return false
})

// Manejador general de errores 404
router.use((req, res) => {
  res.status(404).send(process.env.MSG_RND)
})

module.exports = router

const { createServer } = require('http')
const app = require('./express.js')

const httpServer = createServer(app)

module.exports = httpServer

require('dotenv').config()
const httpServer = require('./config/http')

const PORT = process.env.PORT || '3000'

// Iniciar el Servidor
const server = () => {
	httpServer.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`)
	})
}

server()

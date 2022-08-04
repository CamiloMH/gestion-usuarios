import './config/env.js'
import httpServer from './config/http.js'

const PORT = process.env.PORT || '3000'

// Iniciar el Servidor
const server = () => {
	httpServer.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`)
	})
}

server()

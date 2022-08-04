import { createServer } from 'http'
import app from './express.js'

const httpServer = createServer(app)

export default httpServer

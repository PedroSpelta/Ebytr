import { Server } from 'socket.io'
import { createServer } from 'http'

import app from './app'
import { config } from 'dotenv'

config()
const httpServer = createServer(app)
export const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET', 'DELETE', 'PUT'],
  },
})

const { PORT } = process.env

io.on('connection', (socket) => {
  console.log('socket connection')
  socket.on('disconnect', () => {
    console.log('socket disconnect');
  })
})

httpServer.listen(PORT || 3000, () => {
  console.log(`[express]: Running on ${PORT}`)
})

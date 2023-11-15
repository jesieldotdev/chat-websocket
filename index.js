import express from 'express'
import cors from 'cors'
import http from 'http'
import {Server} from 'socket.io'

const app = express()
app.use(cors())


const server = http.createServer(app)

const io = new Server(server, {
    cors:{
        origin: '*',
        methods: ['GET', 'POST']
    }
})

io.on("connection", (socket) => {
    console.log(socket.id)
    socket.on("disconnect", ()=> {
        console.log("User disconnected", socket.id)
    })
})

server.listen(5000, () => {
    console.log('Listening in port 5000')
})
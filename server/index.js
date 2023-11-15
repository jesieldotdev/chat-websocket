import express from 'express'
import cors from 'cors'
import http from 'http'
import {Server} from 'socket.io'

const app = express()
app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors:{
        origin: ['http://localhost:5001'],
        methods: ['GET', 'POST']
    }
})

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`)

    socket.on("join_room", (data) => {
        socket.join(data)
        console.log(`User with ID: ${socket.id} joinned room: ${data}`)
    })

    socket.on("send_message", (data) => {
        console.log(data)
        socket.to(data.room).emit("receive_message", data)
    })

    io.on("disconnect", (socket) => {
        console.log(`User disconnected: ${socket.id}`)
    })

   
})




server.listen(5000, () => {
    console.log('Listening in port 5000')
})
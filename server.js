
const express=require('express')
const path = require('path')

const app = express()
const http =require('http').createServer(app)

const PORT = process.env.PORT || 3000

http.listen(PORT, ()=>{
    console.log(`app listening on port ${PORT}`)
})


//socket

const io =require('socket.io')(http)
io.on('connection',(socket)=>{
  console.log('connected.....');
  socket.on('message',(msg)=>{
    socket.broadcast.emit('message',msg)

  })
})



app.use(express.static(__dirname + '/public'))

app.get('/',(req,res) =>{
    res.sendFile(__dirname +'/index.html')
})



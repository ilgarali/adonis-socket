import Ws from 'App/Services/Ws'
Ws.boot()

/**
 * Listen for incoming socket connections
 */
Ws.io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' })

  socket.on('sendMessage', (data) => {
    console.log(data,'from-xx')
    socket.broadcast.emit('response',data)
  })
})
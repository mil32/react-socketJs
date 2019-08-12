exports.socketHandler = io => {
    io.on("connection", socket => onConnect(socket,io) );
    
}

const onConnect = (socket,io) => {
    console.log("New client connected ID  ", socket.id );

    socket.emit("welcome", {"data":"Bienvenido al chat"});
    socket.on("chat message", msg =>{
        io.emit('chat message', msg);
        console.log("Mensaje Recibido: ", msg );
    })
    socket.on("disconnect", ()=> console.log("Client Disconnected"));
};





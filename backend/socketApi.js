const io = require("socket.io")()

const ioObj = {
    io: io
}

io.on("connection", (socket) => {
    // console.log(socket.id);
    socket.on("sendMesaage", (data) => {
        console.log(data);
        io.emit("recieveMessage", data)
    })  
})

module.exports = ioObj
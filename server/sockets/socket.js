let { io } = require("../server");

io.on('connection', (client) => {
    console.log("server connected");


    //Listening actions of client
    client.on('disconnect', () => {
        console.log('Client disconnected');
    });

    client.on('sendMessage', (data, callback) => {

        client.broadcast.emit("sendMessage", data);

    });

    //Emitir algo al cliente
    client.emit('sendMessage', { user: "Administrator", message: "Welcome to here!" });
});

io.on('disconnect', () => {
    console.log("Server disconnected");
});
var send, user, message;

function START() {

    send = document.getElementById("sendMessage");

    send.addEventListener("click", sendMessage);
}

function sendMessage() {

    user = document.getElementById("user");
    message = document.getElementById("message");

    var data = {
        user: user.value,
        message: message.value
    }

    message.value = "";

    socket.emit('sendMessage', data);

}



// Inicializa socket en front
var socket = io();

//Escucha de acciones
socket.on('connect', () => {
    console.log("Client Connected to server");
});

socket.on('disconnect', () => {
    console.log("client has disconnect of server");
});

socket.on('sendMessage', function (dataResp) {
    console.log(dataResp.user + ", dice: " + dataResp.message);
});

// var data = { user: "user1", message: "Hello, I'm user1" };
// var callbackEmit = function (response) {
//     console.log("Response server", response)
// }

//comunicar con el servidor emitiendo accion
// socket.emit('sendMessage', data, callbackEmit);



window.addEventListener("load", START);

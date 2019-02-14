
var send, user, message;

function START() {

    user = document.getElementById("user");
    message = document.getElementById("message");
    send = document.addEventListener("click", sendMessage);
}

function sendMessage() {
    console.log("Send Message");

    var data = {
        user: user.innerHTML, 
        message: message.innerHTML
    }

    console.log(data);
    return data;
}

window.addEventListener("onload", START);

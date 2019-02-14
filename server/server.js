require("./config/config");

const express = require("express");
const http = require("http");
const path = require("path");
const socketIO = require("socket.io");

// Ínitialice server
const app = express();
let server = http.createServer(app);

// Set public path
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

// Initialice socket
let io = socketIO(server);

module.exports.io = io;
require("./sockets/socket");

//Start server
server.listen(process.env.PORT, (error) => {

    if (error) throw new Error(error);

    console.log(`Server running on port ${process.env.PORT}...`);
});


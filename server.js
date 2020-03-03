const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = 5000;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

// 
io.on("connection", socket => {
    console.log("New client connected");

    setInterval(() => {
        i = Math.floor(Math.random() * 100) + 1;
        socket.emit("FromAPI", i)
    }, 3000);

    socket.on("disconnect", () => console.log("Client disconnected"));
});
// 

server.listen(port, () => console.log(`Listening on port ${port}`));
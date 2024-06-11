const { createServer } = require('http');
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, { cors: { origin: "http://localhost:3000" } })
const connectedClients = {};
const messages = {};

io.on("connection", (socket) => {
    console.log('New client connected:', socket.id);
    connectedClients[socket.id] = true;

    io.emit('connectedClients', Object.keys(connectedClients));

    socket.on('message', (data) => {
        const { sender, receiver, messageContent, time } = data;

        if (!messages[sender]) {
            messages[sender] = {};
        }
        if (!messages[sender][receiver]) {
            messages[sender][receiver] = [];
        }

        messages[sender][receiver].push({ sender, receiver, messageContent, time });

        io.emit('message', { sender, receiver, messageContent, time });
    })

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
        delete connectedClients[socket.id];
        io.emit('connectedClients', Object.keys(connectedClients));
    });
})


httpServer.listen(8080, () => {
    console.log("Server is connected!")
})
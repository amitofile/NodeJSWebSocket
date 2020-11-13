const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { path: '/feed' });
io.on('connection', (socket) => {
    console.log(`${socket.id} connected`);
    socket.emit("Welcome");
    socket.on('handshake', (data) => {
        console.log(data);
        socket.send(`Welcome ${data.name}`);
    });
    setInterval(() => {
        socket.send("Hello World");
    }, 1000);
});
server.listen(3000);
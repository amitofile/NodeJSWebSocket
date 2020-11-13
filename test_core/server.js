const io = require('socket.io')();
io.on('connection', socket => {
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
io.listen(3000);
const express = require('express');
const http = require('http');
const app = express();
const socketIO = require('socket.io');

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist'));
app.listen(port);


/*socket Io */
const server = http.createServer(app);

const io = socketIO(server);



io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

const express = require('express');
const app = express();
const socketIO = require('socket.io');
const port = process.env.PORT || 8080;


app.use(express.static(__dirname + '/dist'));
app.listen(port);


const server = require('http').Server(app);

const io = socketIO.listen(server);//require('socket.io').listen(app.listen(port));

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

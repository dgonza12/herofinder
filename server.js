const express = require('express');
const app = express();
const socketIO = require('socket.io');
const http = require('http');
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist'));
app.listen(port);


/*socket Io

 */


const io = socketIO(app);



io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

const express = require('express');
const app = express();
const socketIO = require('socket.io');
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist'));
app.listen(port);


/*socket Io

 */

var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

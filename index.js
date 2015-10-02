var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);


console.log(process.cwd() + '/app');
app.use('/app', express.static(__dirname + '/app'));

app.get('/', function(req, res){
  res.sendFile(__dirname  +'/app/index.html');
});

io.on('connection', function(socket){
  socket.on("message", function(m){
    socket.emit('all:message', m);
    console.log(m);
  });
  console.log('a user connected');
});

http.listen(4000, function(){
  console.log('listening on *:4000');
});

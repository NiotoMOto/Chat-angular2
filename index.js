var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/app', express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', function(req, res){
  res.sendFile(__dirname  +'/app/index.html');
});

io.on('connection', function(socket){
  socket.on("user:message", function(m){
    io.emit('chat:message', m);
  });
});

http.listen(4000, function(){
  console.log('listening on *:4000');
});

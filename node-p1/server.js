var express=require('express');
var socket=require('socket.io');

var app=express();
var server=app.listen(3000);
var io=socket(server);

app.use(express.static('public'));
io.sockets.on('connection',newConnection);

function newConnection(socket){
	console.log(`New connection: ${socket.id}`);
	socket.on('toServer',mouseMsg);
	
	function mouseMsg(data){
		socket.broadcast.emit('toClients',data);
		//console.log(data);
	}
}

console.log("Server running");

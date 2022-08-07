var strokeSize=20;
var socket;

function setup() {
  createCanvas(600,400);
  background(50);
  noStroke();
  
  socket=io.connect('http://localhost:3000');
  socket.on('toClients',newDrawing);
}

function newDrawing(data){
	fill(255,0,100);
	ellipse(data.x, data.y, strokeSize, strokeSize);
}

function mouseDragged(){
	fill(255,255,255);
	ellipse(mouseX, mouseY, strokeSize, strokeSize);
	
	socket.emit('toServer',{x: mouseX, y: mouseY});
}
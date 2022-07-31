var noiseFactor=0.01;
var xoff=0;

function setup() {
  createCanvas(400, 400);
  stroke(255);
  noFill();
}

function draw() {
  background(50);
  beginShape();
  for (var x=0; x< width; x++){
    vertex(x, noise(x*noiseFactor+xoff)*height);
  }
  endShape();
  
  xoff+=0.01;
}
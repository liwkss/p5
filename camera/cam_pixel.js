var video;
var vw = 80;
var vh = 60;
var vScale=8;

function setup() {
  createCanvas(vw*vScale, vh*vScale);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(vw, vh);
  frameRate(5);
  
  noStroke();
  fill(255);
  rectMode(CENTER);
}

function draw() {
  background(50);
  loadPixels();
  video.loadPixels();
  for(var y=0; y<vh; y++){
    for(var x=0; x<vw; x++){
      var index = (x + y * video.width)*4;
      var r= video.pixels[index+0];
      var g= video.pixels[index+1];
      var b= video.pixels[index+2];
      var bright=(r+g+b)/3;
      var w=map(bright, 0, 255, 0, vScale);
      
      rect(x*vScale, y*vScale,w,w);
    }
  }
}

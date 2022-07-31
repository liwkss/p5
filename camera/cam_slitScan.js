var video;
var vw = 80;
var vh = 60;
var vScale=4;
var x=0;

function setup() {
  createCanvas(vw*vScale, vh*vScale);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(vw, vh);
  background(50);
    
  noStroke();
}

function draw() {
  loadPixels();
  video.loadPixels();
  
  if(x==vw) x=0;
  fill(50);  
  rect(x*vScale, 0,vScale,vh*vScale);
  
  fill(255);  
  for(var y=0; y<vh; y++){
      var index = (x + y * video.width)*4;
      var r= video.pixels[index+0];
      var g= video.pixels[index+1];
      var b= video.pixels[index+2];
      var bright=(r+g+b)/3;
      var w=map(bright, 0, 255, 0, vScale);
      
      rect(x*vScale, y*vScale,w,w);
  }
  x++;
}

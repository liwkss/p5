var noiseFactor=0.01;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
  stroke(255);
  noFill();
}

function draw() {
  loadPixels();
  for (var x=0; x< width; x++){
    for (var y=0; y< height; y++){
      var index= (x + y* width)*4;
      var r=noise(x*noiseFactor,y*noiseFactor)*255;
      pixels[index+0]=r;
      pixels[index+1]=r;
      pixels[index+2]=r;
      pixels[index+3]=255;
    }
  }
  updatePixels();
  noLoop();
}
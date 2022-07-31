var video;

function setup() {
  canvas = createCanvas(640, 480, WEBGL);
  canvas.id('p5canvas');
  video=createCapture(VIDEO);
  video.size(640,480);
  video.id('p5video');
  video.hide();
  
  var seriously= new Seriously();
  var blur=seriously.effect('blur');
  blur.source= seriously.source('#p5video');
  seriously.target('#p5canvas').source=blur;
  seriously.go();
}

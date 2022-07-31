var video;
var snapshots = [];
var vw = 320;
var vh = 240;
var sw = 80;
var sh = 60;

function setup() {
  createCanvas(640, 240);
  video = createCapture(VIDEO);
  video.size(vw, vh);

  button = createButton("extra capture");
  button.mousePressed(capture);
  setInterval(capture, 1000);
}

function capture() {
  if (snapshots.length >= 32) snapshots.shift();
  snapshots.push(video.get());
  for (var i = 0; i < snapshots.length; i++) {
    image(snapshots[i], (i * sw) % 640, sh * floor((i * sw) / 640), sw, sh);
  }
}

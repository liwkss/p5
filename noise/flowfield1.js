var noiseFactor=0.1;
var scl=10;
var col, row;
var fr;
var t=0;
var toff=0.01;

var particles=[];
var flowfield;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
  noFill();
  col=floor(width/scl);
  row=floor(height/scl);
  flowfield=new Array(col* row);
  for(var i=0;i<100;i++)
    particles[i]=new Particle();
  
  fr=createP();
}

function draw() {
  background(255);
  for (var x=0; x< col; x++){
    for (var y=0; y< row; y++){
      var index= x + y* col;
      var angle=noise(x*noiseFactor,y*noiseFactor,t)*TWO_PI;
      var v=p5.Vector.fromAngle(angle);
      v.setMag(0.1);
      flowfield[index]=v;
      push();
      translate(x*scl,y*scl);
      rotate(v.heading());
      stroke(0,50);
      strokeWeight(1);
      line(0,0,scl,0);
      pop();
    }
  }
  
  t+=toff;
  for(p of particles){
    p.follow(flowfield);
    p.update();
    p.show();
    p.edges();
  }
  fr.html(floor(frameRate()));
}


function Particle(){
  this.pos=createVector(random(width),random(height));
  this.vel=createVector(0,0);
  this.acc=createVector(0,0);
  this.maxspeed=4;
  
  this.update=function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  this.applyForce=function(force){
    this.acc.add(force);
  }
  
  this.show=function(){
    stroke(0);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
  }
  
  this.edges=function(){
    if(this.pos.x > width) this.pos.x=0;
    if(this.pos.x < 0) this.pos.x=width;
    if(this.pos.y > height) this.pos.y=0;
    if(this.pos.y < 0) this.pos.y=height;
  }
  
  this.follow=function(vectors){
    var x=floor(this.pos.x/scl);
    var y=floor(this.pos.y/scl);
    var index=x + y*col;
    var force=vectors[index];
    this.applyForce(force);
  }
}
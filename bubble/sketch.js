let bubbles=[];

function setup() {
  createCanvas(400, 400);

  for(let i=0;i<30;i++){
    bubbles[i]=new Bubble(random(width),random(height),random(10,40))
  }

}

function draw() {
  background(0);
  for(let b of bubbles){
    b.show();
    b.move();
    let intersect=false;
    for(let ob of bubbles){
      if(b !== ob && b.intersects(ob)){
        intersect=true;
      }
    }
    if(intersect){
      b.brightness=255;
    }else{
      b.brightness=10;
    }
  }
}

function mousePressed(){
  for (let i=bubbles.length-1;i>=0;i--){
    if(bubbles[i].contains(mouseX, mouseY)){
      bubbles.splice(i,1);
    }
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness=10;
  }
  show() {
    stroke(255);
    strokeWeight(2);
    fill(this.brightness, 100);
    circle(this.x, this.y, this.r * 2);
  }
  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }
  contains(x,y){
    //console.log("s"+x+" "+y+" "+this.x+" "+this.y+" "+dist(x,y,this.x,this.y)+" "+this.r)
    if(dist(x,y,this.x,this.y)<this.r){
      return true;
    }else{
      return false;
    }
  }
  intersects(b){
    if(dist(this.x,this.y,b.x,b.y)<this.r+b.r){
      return true;
    }else{
      return false;
    }
  }
}

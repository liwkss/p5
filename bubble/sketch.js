let bubbles = [];
let circleNum;
let circleNumSlider;

function setup() {
  createCanvas(400, 400);

  circleNumSlider = createSlider(10, 100, 50);
  circleNum = createP();
  circleNumSlider.changed(recreateBubbles);
  recreateBubbles();
}

function draw() {
  background(0);

  for (let b of bubbles) {
    b.show();
    b.move();
    b.brightness = 0;
  }

  for (let i = 0; i < bubbles.length; i++) {
    for (let j = i + 1; j < bubbles.length; j++) {
      if (bubbles[i].intersects(bubbles[j])) {
        bubbles[i].brightness = 255;
        bubbles[j].brightness = 255;
      }
    }
  }
}

function recreateBubbles() {
  circleNum.html(`Number of circles: ${circleNumSlider.value()}`);
  circleNumSlider.parent(circleNum);

  bubbles = [];
  for (let i = 0; i < circleNumSlider.value(); i++) {
    bubbles[i] = new Bubble(random(width), random(height), random(10, 40));
  }
}

function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i, 1);
    }
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
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
  contains(x, y) {
    //console.log(`s ${x} ${y} ${this.x} ${this.y} ${dist(x,y,this.x,this.y)} ${this.r}`)
    if (dist(x, y, this.x, this.y) < this.r) {
      return true;
    } else {
      return false;
    }
  }
  intersects(b) {
    if (dist(this.x, this.y, b.x, b.y) < this.r + b.r) {
      return true;
    } else {
      return false;
    }
  }
}

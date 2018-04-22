function setup() {
	createCanvas(100, 100);
}

let step = 0.01;
let amount = 0;

function draw() {
  background(240);
  let v0 = createVector(0,0);

  let v1 = createVector(mouseX, mouseY);
  drawArrow(v0,v1,'red');

  let v2 = createVector(90, 90);
  drawArrow(v0,v2,'blue');

  if(amount > 1 || amount < 0){
    step *= -1;
  }
  amount += step;
  let v3 = p5.Vector.lerp(v1, v2, amount);

  drawArrow(v0,v3,'purple');
}

// draws arrow between two vectors
function drawArrow(vec0, vec1, myColor) {
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  push();
  translate(vec0.x, vec0.y);
  line(0, 0, vec1.x, vec1.y);
  rotate(vec1.heading());
  let arrowSize = 7;
  translate(vec1.mag() - arrowSize,0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}
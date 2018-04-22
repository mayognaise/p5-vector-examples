
function setup() {
	createCanvas(100, 100);
  v = createVector(0, 0);
  frameRate(1);
}

// set
function draw() {
  background(240);

  let v0 = createVector(50,50);
  drawArrow(v0,p5.Vector.random2D().mult(50),'black');
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
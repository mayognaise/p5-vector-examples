function setup() {
	createCanvas(100, 100);
}

// blue vector is the normalized version of the red vector multipled by 35
// notice you can never shrink the blue vector to zero
function draw() {
  background(240);

  let v0 = createVector(50,50);
  let v1 = createVector(mouseX-50, mouseY-50);

  drawArrow(v0,v1,'red');
  drawArrow(v0,v1.normalize().mult(35),'blue');

  noFill();
  ellipse(50, 50, 35 * 2);
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
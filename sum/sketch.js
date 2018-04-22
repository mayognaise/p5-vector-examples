function setup() {
	createCanvas(100, 100);
}

// red vector + blue vector = purple vector
function draw() {
  background(240);
  let v0 = createVector(0,0);

  let v1 = createVector(mouseX, mouseY);
  drawArrow(v0,v1,'red');

  let v2 = createVector(-30, 20);
  drawArrow(v1,v2,'blue');

  let v3 = p5.Vector.add(v1, v2);
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
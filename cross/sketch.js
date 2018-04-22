function setup() {
	createCanvas(100, 100);
}

function draw() {
  background(240);

  let v0 = createVector(10,10,0);
  let v1 = createVector(50,0,0);

  let v2 = createVector(mouseX-v0.x,mouseY-v0.y,0);

  noStroke();
  fill('thistle');
  beginShape();
  vertex(v0.x,v0.y);
  vertex(v1.x+v0.x,v1.y+v0.y);
  vertex(mouseX+v1.x, mouseY+v1.y);
  vertex(mouseX, mouseY);
  endShape();

  drawArrow(v0,v1,'red');
  drawArrow(v0,v2,'blue');

  noStroke();
  text('length of cross product: '+v2.cross(v1).mag(),5,70,95,50);

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
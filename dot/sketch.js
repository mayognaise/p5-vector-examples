function setup() {
	createCanvas(100, 100);
}

function draw() {
  background(30);

  strokeWeight(10);
  let v0 = createVector(0,50);
  let v1 = createVector(25,0);
  drawArrow(v0,v1,'yellow');

  strokeWeight(3);
  let v2 = createVector(50,50);
  let v3 = createVector(mouseX-v2.x, mouseY-v2.y);
  let angle = v3.heading();
  let length = v3.mag();

  noStroke();
  fill('lightyellow');
  beginShape();
  vertex(v2.x+length/2*cos(PI/2+angle),v2.y+length/2*sin(PI/2+angle));
  vertex(100,v2.y+length/2*sin(PI/2+angle));
  vertex(100,v2.y-length/2*sin(PI/2+angle));
  vertex(v2.x-length/2*cos(PI/2+angle),v2.y-length/2*sin(PI/2+angle));
  endShape();

  drawArrow(v2,v3,'dodgerblue');

  let v4 = createVector(50*cos(angle),50*sin(angle));
  line(v2.x+length/2*cos(PI/2+angle),v2.y+length/2*sin(PI/2+angle),v2.x-length/2*cos(PI/2+angle),v2.y-length/2*sin(PI/2+angle));


  fill('white');
  noStroke();
  text('dot product: '+v3.dot(v1),5,70,95,50);

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
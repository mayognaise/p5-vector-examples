function setup() {
	createCanvas(100, 100);
}

function draw() {
  background(240);
  let v0 = createVector(0,100);

  let v1 = createVector(50, -50);
  drawArrow(v0,v1,'red');

  let num = map(mouseX,0,width,10,0.5,true);

  let v2 = p5.Vector.div(v1,num);
  drawArrow(v0,v2,'blue');

  noStroke();
  text('divided by '+nf(num,1,1),10,90);
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
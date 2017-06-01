function setup() {
  createCanvas(640, 360);
};

function draw() {
  background(51);
  strokeWeight(2);
  stroke(60, 150 * random(1.5, 1/1.5), 200 * random(1.5, 1/1.5));
  noFill();
  drawCircle(width/2, height/2, 50, 10);


};

function drawCircle(x, y, d, n) {
  ellipse(x, y, d, d);
  ellipse(x, y, d - 1, d - 1);

  if (n < 3) {
    return;
  }

  if (d > 10) {
    drawCircle(x, y, d * random(2, 1/1.5), n - 1);
  }


};

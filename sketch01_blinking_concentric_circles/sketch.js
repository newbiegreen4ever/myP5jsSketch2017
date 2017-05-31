//v0 2017-05-31(Wed), 0745am-0813am

function setup() {
  createCanvas(640, 360);
};

function draw() {
  background(51);
  strokeWeight(2);
  stroke(60, 150 * random(1.5, 1/1.5), 200 * random(1.5, 1/1.5));
  noFill();
  drawCircle(width/2, height/2, 200, 10);
};

function drawCircle(x, y, d, n) {
  ellipse(x, y, d, d);
  ellipse(x, y, d - 10, d - 10);

  if (n < 2) {
    return;
  }

  if (d > 50) {
    drawCircle(x, y, d * random(2, 1/1.5), n - 1);
  }
};

function setup() {
  createCanvas(400, 400);
  background(10);
  colorMode(HSB);
}

function draw() {
  for (var a = 0; a < width/10; a ++) {
    for (var n = 0; n < height/10; n ++) {
      noStroke();
      fill(width / a, height / n, 100);
      ellipse(20*a, 20*n, width/25, height/25);
    }
  }
}

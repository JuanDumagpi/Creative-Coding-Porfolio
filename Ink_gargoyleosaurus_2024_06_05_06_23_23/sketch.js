function setup() {
}
let x = 0;
let y = 0;
let x2= 0;
let y2= 300;
let x3= 0;
let y3= 550;
function setup() {
  createCanvas(600, 600)
  background(100,0,350);
}

function draw() {
  ellipse (x, y, 100, 100);
x=x+1
y=y+1
  rect (x2, y2, 100, 100);
x2=x2+1
  triangle (x3-45, y3-45, x3+45, y3+45, x3+90, y3-90);
y3=y3-1
x3=x3+1
  point (mouseX, mouseY)
  }
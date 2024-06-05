    var n = 0;
    var c = 6;
function setup() {
  createCanvas(800, 800);
  background(0);
  
  //changes the angles from radian to degrees
  angleMode (DEGREES)
  //changes the color to Hue, Saturation, and Brightness instead of RGB
  colorMode(HSB);
}


function draw() {
  
  //as long as this is pressed, it will draw the circles below according to


  //calculates an imaginary point on the canvas going out in a spiral from the center
    var a = n * 137.5;
  //a is angle
    var r = c * sqrt(n);
  //r is radius    
    var x = r * cos (a) + width /2;
    var y = r * sin (a) + height /2;
  
  //the ellipse is drawn in a color depending on the mouse position on the space where the imaginary points are
    noStroke();
    fill(mouseX/2,mouseY/2,mouseX*5);
    ellipse (x, y, 8, 8);
  
  //increases the value of n as we go
    n++
    
}
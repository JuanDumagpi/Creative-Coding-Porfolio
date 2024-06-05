function setup() {
  createCanvas(400, 400);
}

function draw() {
let x = mouseX
let y = mouseY
background(251, 181,207);

//cheeks
noStroke();
fill (236,85,104);
ellipse (x+70, mouseY+60, 50, 20);
  
noStroke();
fill (236,85,104);
ellipse (x-70, mouseY+60, 50, 20);
  
//mouth
stroke (0);
strokeWeight (5);
noFill ();
arc (x, mouseY+50, 60, 45, 0, radians(180));
  
//eyes
if (mouseIsPressed === true)
{
stroke (0);
strokeWeight (16);
noFill ();
arc (x-50, mouseY, 60, 10, PI, radians(0));
  
stroke (0);
strokeWeight (16);
noFill ();
arc (x+50, mouseY, 60, 10, PI, radians(0));
}
else 
{
noStroke();
fill (0);
ellipse (x-50, mouseY, 50, 100);
  
noStroke();
fill (0);
ellipse (x+50, mouseY, 50, 100);
  
noStroke();
fill (255);
ellipse (x-45, mouseY-20, 20, 35);
  
noStroke();
fill (255);
ellipse (x+55, mouseY-20, 20, 35);
} 
}
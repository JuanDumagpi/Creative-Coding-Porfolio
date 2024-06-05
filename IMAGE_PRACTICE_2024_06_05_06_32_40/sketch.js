
var img;
function preload(){
  img=loadImage('pic.jpg')
}

function setup() {
  createCanvas(800, 600);
  background(0);

}

function draw(){
  var x=map(mouseX, 0, width, 0, 3);
  var y=map(mouseY, 0, height, 0, 7);
  tint (mouseX/2, mouseY/2, mouseX+mouseY/2);  
  image(img, 0, 0, width/2, height/2, 0, 0, img.width, img.height, COVER);
    filter (BLUR, x);
  image(img, 400, 300, width/2, height/2, 0, 0, img.width, img.height, COVER);
    filter (POSTERIZE, y);
  image(img, 400, 0, width/2, height/2, 0, 0, img.width, img.height, COVER);
    filter (ERODE, y);
  image(img, 0, 300, width/2, height/2, 0, 0, img.width, img.height, COVER);
    
}
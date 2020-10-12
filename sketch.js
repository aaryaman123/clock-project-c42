var hr,min,sec;
var minAngle,secAngle,hrAngle;


function setup() { 
  createCanvas(400,400);

}

function draw() {
  background(0,0,0);

  hr=hour();
  min=minute();
  sec=second();

  translate(200,200);
  rotate(-90);
  angleMode(DEGREES);

  noFill();
  stroke(0,255,0);
  strokeWeight(10);
  secAngle=map(sec,0,60,0,360);
  arc(0,0,300,300,0,secAngle);

  push();
  rotate(secAngle);
  stroke(0,255,0);
  strokeWeight(7); 
  line(0,0,100,0);
  pop(); 

  noFill();
  stroke(0,0,255);
  strokeWeight(10);
  minAngle=map(min,0,60,0,360);
  arc(0,0,320,320,0,minAngle);

  push();
  rotate(minAngle);
  stroke(0,0,255);
  strokeWeight(7); 
  line(0,0,85,0);
  pop(); 

  noFill();
  stroke(255,0,0);
  strokeWeight(10);
  hrAngle=map(hr%12,0,12,0,360);
  arc(0,0,340,340,0,hrAngle);

  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7); 
  line(0,0,70,0);
  pop(); 

  drawSprites();
}
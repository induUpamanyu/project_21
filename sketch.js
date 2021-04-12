var wall;

var bullet,speed,weight;


var speed,weight;
function setup() {
  createCanvas(1600,400);

  speed = random(55,90);

  weight = random(400,1500);

  thickness = random(22,83);

bullet = createSprite(50,200,50,10);

bullet.velocityX = speed;

bullet.shapeColor = color(150)

wall = createSprite(800,300,50,150);

wall.shapeColor = color(100);

}

function draw() {
  background(255,255,255);  
if(wall.x-bullet.x < (bullet.width+wall.width)/2){

bullet.velocity = 0;
var deformation = 0.5 * weight * speed * speed/22500;


if(deformation>100){

bullet.shapeColor = color("green");
wall.shapeColor = color("white");

}

if(deformation<100){

bullet.shapeColor = color("red");
wall.shapeColor = color("white");

}
}

 drawSprites();
}
var car
var wall
var speed
function setup() {
  createCanvas(800,400);
  car=createSprite(100, 200, 50, 50);
  wall=createSprite(700,200,60,200)
  speed=random(55,90)
  car.velocityX=speed
}

function draw() {
  background('black');  
  if(car.isTouching(wall))
  {
    car.velocityX=0
    car.shapeColor="red"
  }
  drawSprites();
}
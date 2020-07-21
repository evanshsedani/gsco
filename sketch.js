var car, randspeed, wall;

function setup() {
  createCanvas(800,400);
  car = createSprite(100, 270, 70, 30);
  wall = createSprite(700, 280, 30, 400)
  randspeed = random(55, 500);
  car.velocityX= randspeed;
}


function draw() {
  background(255,255,255);  
  
  car.collide(wall);
  
  if(randspeed>55 && randspeed<100){
    car.shapeColor = color(0,150,0)
  }

  if(randspeed>200 && randspeed<350){
    car.shapeColor = color(0,0,100)
  }

  if(randspeed>350 && randspeed<500){
    car.shapeColor = color(100,0,0)
  }
  
  drawSprites();
}
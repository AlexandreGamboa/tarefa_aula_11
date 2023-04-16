var seaImg, sea;
var shipImg, ship;

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200, 200, 400, 400);
  sea.addImage(seaImg);
  sea.scale=0.3;
  ship = createSprite(130, 200, 80,80);
  ship.addAnimation("mexendo", shipImg);
  ship.scale= 0.3;
  
  
}

function draw() {
  background("blue");
  drawSprites();
}

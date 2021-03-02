var fixedRect,movingRect,rect3;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  rect3= createSprite(500, 200, 80, 30);
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

 if( isTouching(movingRect,fixedRect))
 {
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

 }
 else if(isTouching(movingRect,rect3)){
  movingRect.shapeColor="red";
  rect3.shapeColor="red";

 }
 
 else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  rect3.shapeColor="green";

 }
  drawSprites();
}


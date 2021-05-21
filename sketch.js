var tower,towerImg;
var door,doorImg;
var doorGroup;
var ghost,ghostImg;
var position;



function preload(){
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  ghostImg=loadImage("ghost-standing.png");
}


function setup(){
  createCanvas (1200,600);
  camera.position.x = displayWidth/2;
  camera.position.y =  ghost.y;
  tower=createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY=1;
  
  ghost=createSprite(200,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.4;
  
  
  
  
  
  doorGroup=new Group ();


  
}


function draw(){
  background("black");
  if(tower.y>400){tower.y=300}
  if(keyDown("space")){
    ghost.velocityY=-5;
  }
  if(keyDown("RIGHT_ARROW")){
    ghost.velocityX=ghost.velocityX+3;
  }
  if(keyDown("LEFT_ARROW")){
    ghost.velocityX=ghost.velocityY-3;
  }
  ghost.velocityY=ghost.velocityY+0.5;
  spawnDoors();
  
  drawSprites();
  
}

function spawnDoors(){
  if(frameCount%240===0){
    door=createSprite(200,-50);
    door.addImage("door",doorImg);
    door.x=Math.round(random(120,400));
    door.velocityY=1;
    door.lifetime=800;
    doorGroup.add(door);
    door.scale=1.5;
    
  }
  
  
  
  
  
}
var bgImg,bg,sleep,brush,bath,gym,eat,drink,move,astronaut,edges;

function preload(){
  bgImg=loadImage("Images/iss.png");
  sleep=loadAnimation("Images/sleep.png");
  brush=loadAnimation("Images/brush.png");
  gym=loadAnimation("Images/gym1.png","Images/gym2.png");
  eat=loadAnimation("Images/eat1.png","Images/eat2.png");
  drink=loadAnimation("Images/drink1.png","Images/drink2.png");
  move=loadAnimation("Images/move.png","Images/move.png","Images/move1.png","Images/move1.png");
  bath=loadAnimation("Images/bath1.png","Images/bath2.png");
}

function setup() {
  createCanvas(800,400);
  
  astronaut=createSprite(400,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
}

function draw() {
  background(bgImg);  

  drawSprites();

  edges=createEdgeSprites();

  astronaut.bounceOff(edges);
  
  textSize(20);
  fill("white");
  text("Instruction:",10,50);
  text("Up Arrow = Brushing",10,70);
  text("Down Arrow = Gym",10,90);
  text("Left Arrow = Eating",10,110);
  text("Right Arrow = Bathing",10,130);
  text("M Key = Move",10,150);

  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  
  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  
  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  
  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX=1;
    astronaut.velocityY=1;
  }
}
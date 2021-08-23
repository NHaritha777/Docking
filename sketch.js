var spacecraft, iss;
var spaceanimate, issimg,bg, spaceimg;

function setup() {
  createCanvas(1300,600);
  spaceanimate= loadAnimation("spacecraft1.png","spacecraft2.png","spacecraft3.png","spacecraft4.png");
  issimg= loadImage("iss.png");
  bg=loadImage("spacebg.jpg");
  spaceimg= loadImage("spacecraft1.png");

  //creating spacecraft
  spacecraft=createSprite(900, 500, 50, 50);
  spacecraft.addAnimation("moving", spaceanimate);
  spacecraft.scale=0.25;

  //creating iss
  iss= createSprite(500,270,42,13);
  iss.addImage(issimg);
  iss.scale=1.01;

  bg.scale=0.01;
  spacecraft.x= spacecraft.x + random(-1,1);
}

function draw() {
  background(bg); 
  
  // change in position of spacecraft when keys are pressed
  if(keyDown(UP_ARROW)){
    spacecraft.y += -10;
  }

  if(keyDown(DOWN_ARROW)){
    spacecraft.y += 10;
  }

  if(keyDown(RIGHT_ARROW)){
    spacecraft.x += 10;
  }

  if(keyDown(LEFT_ARROW)){
    spacecraft.x += -10;
  }

  //docking
  if(spacecraft.y <= (iss.y+90) && spacecraft.x <= (iss.x-10)){
    hasDocked= true;
    spacecraft.addAnimation("moving",spaceimg);
    textSize(30);
    fill("white");
    text("!!DOCKING SUCCESSFUL!!",750,300); 
  }  

  drawSprites();
}
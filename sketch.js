
var monkey , monkey_running
var banana,bananaI, obstacle, obstacleI
var FoodGroup, obstacleGroup, ground
var score 
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaI = loadImage("banana.png");
  obstacleI = loadImage("obstacle.png");
  
  score=0
}



function setup() {
 createCanvas(400,400) 

  ground = createSprite(200,350,700,20)
  ground.velocityX = -2;
  
   monkey = createSprite(40,300,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.15
  
  
  FoodGroup = new Group();
  obstacleGroup = new Group(); 
}


function draw() {
background("cyan");
 
  
  

  if(ground.x < 100){
    ground.x = 200
  }
  
  if (keyDown ("space")){
    monkey.velocityY=-5
  }
  monkey.velocityY = monkey.velocityY+0.2
  monkey.collide(ground)
  
  
  
  objectFall();
  foodFall();
  
  drawSprites();
  
   stroke("white");
  textSize(15);
  text("SCORE =" + score,160,25)
  
  stroke("black");
  textSize(15);
  survivalTime = Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME ="+ survivalTime,160, 40)
  
 
}

function objectFall(){
 if(frameCount%300===0){
   
  object = createSprite(350,315,5.5,5.0001)
object.addImage(obstacleI)
  object.scale=0.2
  object.velocityX= -2
  
  obstacleGroup.add(object)
 }
}

function foodFall(){
 if(frameCount%80===0){
   
  banana = createSprite(250,250,5.5,5.0001)
banana.addImage(bananaI)
  banana.scale=0.10002
   banana.velocityX=-5
  
  FoodGroup.add(banana)
 }
}




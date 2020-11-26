const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var name, girl, boy;
var character, girlImg, boyImg;
var gameState = 1;

function preload(){
	girlImg = loadImage("girl.png");
	boyImg = loadImage("boy.png")
}

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	welcome = createElement("h2");
    name = createInput("NAME PLEASE")
	girl = createButton("******GIRL******");
	boy = createButton("******BOY******");
	character = new Character();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gold");
  welcome.html("Hello and Welcome To Play The Golden Game . Here You Will Go On A Hunt To Find The Peacock's Golden Egg Which Was Stolen By The Vulters. Please Select Your Self A Character And Let's Begin !!")
  welcome.position(50,100);
 // name.position(750,300);
  girl.position(750,400);
  boy.position(750,500);
  girl.mousePressed(()=>{
    gameState = 2;
    character.addImage(girlImg)
  })
  boy.mousePressed(()=>{
    gameState = 2;
    character.addImage(boyImg)
  })
  if(gameState === 2){
  character.display();
  }

  drawSprites();
}




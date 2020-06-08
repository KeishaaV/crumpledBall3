var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = new Ground(400, 680, 800, 50);
	 World.add(world, ground);
	 
	 ball= new Ball(100, 600, 30, 30); 
	 World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(700, 650, 100, 10);
  rect(650, 600, 10, 100);
  rect(750, 600, 10, 100);

  Engine.update(engine);
  
  ground.display();
  ball.display();
  
  drawSprites();
 
}




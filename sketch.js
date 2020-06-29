var ballImg, binImg; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var sling;

function preload()
{
	ballImg= loadImage("sprites/paper.png");
	binImg= loadImage("sprties/dustbingreen.png");
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
	 ball.addImage(ballImg);
	 World.add(world, ball);

	 sling = new Slingshot(ball.body,{x:200,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  image(binImg, 600, 650, 100, 100);

  Engine.update(engine);
  
  ground.display();
  ball.display();
  sling.display();
  
  drawSprites();
 
}

function keyPresses(){
	if (keyCode===32){
		ball.velocityY= -10;
	}
}




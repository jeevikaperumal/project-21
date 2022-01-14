
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var ball
var world,engine;
var ground,wall1,wall2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
	  isStatic:false,
      restution:0.3,
	  friction:0,
	  density:1.2

	}
	var ground_options={
		isStatic:true
	   }

	ball=Bodies.circle(100,50,10,ball_options);
    World.add(world,ball);

	ground=Bodies.rectangle(400,690,800,20,ground_options);
	World.add(world,ground);

	wall1=Bodies.rectangle(500,650,10,60,ground_options);
	World.add(world,wall1);

	wall2=Bodies.rectangle(600,650,10,60,ground_options);
	World.add(world,wall2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10);
  rect(ground.position.x, ground.position.y, 800,20);
  rect(wall1.position.x,wall1.position.y,10,60);
  rect(wall2.position.x,wall2.position.y,10,60);

  drawSprites();
 
}







const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(400,200,550,35);
	bob1 = new Bob(220,400,35);
	//chain1 = new Chain(ground1.body,bob1.body);
	//chain1 = new Chain(bob1.body,{x:145,y:200});
	chain1 = new chain(bob1.body,{x:145,y:200});
	
	bob2 = new Bob(300,400,35);
	bob3 = new Bob(375,400,35);
	bob4 = new Bob(450,400,35);
	bob5 = new Bob(525,400,35);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

ground1.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

chain1.display();



  
  drawSprites();
 
}




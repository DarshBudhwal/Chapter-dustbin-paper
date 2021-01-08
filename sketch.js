
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper (100,100,20);
	
	rectangle1 = new Dustbin(300,200,80,10);
	rectangle2 = new Dustbin(350,200,10,80);
	rectangle3 = new Dustbin(270,200,10,80);

    ground = new Ground(200,200,1000,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  paper.display();
  ground.display();
  rectangle1.display();
  rectangle2.display();
  rectangle3.display();
  drawSprites();
 
}



function keyPressed (){
if(keyCode === UP_ARROW){
 Matter.Body.applyForrce(paper.body,paper.body.position,{x:85,y:-85});
}
}
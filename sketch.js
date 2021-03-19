
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var s_1, s_2, s_3;
var g_rownd, g_round;
var knockoff;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//ok
	
	s_1  = new cleaner(833, 600, 300, 100) ;
	//s_2  = new cleaner(1014,660, 30, 100) ;
	//s_3  = new cleaner(919, 700, 180, 30) ;

	g_round = new ground_support(700, 600, 200, 30);
	g_rownd = new ground_support(200, 600, 500, 30) ;

	knockoff = new knocker(650,570, 30, 100) ; 
	Engine.run(engine);
  
	ball = new bawl(100,560, 50, 50) ;  

	
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  s_1.display();
 // s_2.display();
 // s_3.display();
  g_rownd.display();
  g_round.display();
  knockoff.display();
  ball.display();


  drawSprites();
	
}

  

function keyPressed (){
   
	if (keyCode === UP_ARROW){
      Matter.Body.applyForce(ball.body,ball.body.position,{x:100, y:-120})
	}
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "onLauncher";

function setup() {
	createCanvas(1200, 600);	
	
	engine = Engine.create();
	world = engine.world;

	dustbin = new Dustbin(1000,570,210,12);
	paper = new Paper(150,310,70);	
	ground = new Ground(width/2,height-20,1200,12);
	launcher = new Launcher(paper.body, {x:200, y:310});

	Engine.run(engine);
}

function draw() {
  	background("white");
  	Engine.update(engine);

	strokeWeight(2);
	paper.display();
	ground.display();
	dustbin.display();
	launcher.display();
}

function mouseDragged(){
    if (gameState !== "launched"){
		Matter.Body.setPosition(paper.body, {x: mouseX, y: mouseY});
	}
}

function mouseReleased(){
    launcher.fly();
	gameState = "launched";
}
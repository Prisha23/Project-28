
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyimg;
var mango1, mango2, mango3, mango4, mango5;
var stoneObj;

var boyimg = createSprite(650, 100, 50, 50);
function preload()
{
	boyimg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	slingshot.fly();
}

function keyPressed(){
if (keyCode === 32) {
	Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
	launcherObject.attach(stoneObj.body)
}
}

function detectcollision(lstone, lmango){
	mangoBodyPosition = lmango.body.podition
	stoneBodyPosition = lstone.body.podition

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if (distance<-lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body,false);
	}
}


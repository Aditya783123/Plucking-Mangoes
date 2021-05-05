
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var boy, boyImg;
var tree, treeImg;
var ground;
var stone, stoneImg;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;
function preload()
{
    boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 800);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
    ground = new Ground(width/2, 675, width, 20);
    tree= new Tree(1050, 580);
    stone=new Stone(235, 420, 30);
    connector=new Connector(stone.body, {x:235, y:420})
    mango1 = new Mango(1100, 100, 30);
    mango2 = new Mango(1170, 130, 30);
    mango3 = new Mango(1010, 140, 30);
    mango4 = new Mango(1000, 70, 30);
    mango5 = new Mango(1100, 70, 30);
    mango6 = new Mango(1000, 230, 30);
    mango7 = new Mango(900, 230, 30);
    mango8 = new Mango(1140, 150, 30);
    mango9 = new Mango(1100, 230, 30);
    mango10 = new Mango(1200, 200, 30);
    mango11 = new Mango(1120, 50, 30);
    mango12 = new Mango(900, 160, 30);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background('white');
  image(boyImg, 200, 340, 200, 300);
  ground.display();
  tree.display();
  stone.display();
  connector.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);
  detectCollision(stone, mango11);
  detectCollision(stone, mango12);
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}
function mouseReleased(){
    connector.fly();
}
function detectCollision(obj1, obj2){
    var pos1 = obj1.body.position;
    var pos2 = obj2.body.position;
    var distance = dist(pos1.x, pos1.y, pos2.x, pos2.y);
    console.log(pos1);
    console.log(distance);
    if(distance<=pos1.r+pos2.r){
        Matter.Body.setStatic(obj2.body, false);
    }
}
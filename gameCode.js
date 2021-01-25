//loading all the matter functions
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;



//loading all the game variables 
var treeObj, stoneObj,groundObject, launcherObject;																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																									 																																																																																																								
var mango1;
var world;
var boyI,girlI,BI,groundI,jungleI,stoneI,ST2I,sunI,treeI;
var boy,girl,background_var,jungle,stone1,stone2,sun,tree1;
var music;
var m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14;
var sun,groundm;
var slingshot1;
var sling2;

//loading all the images and sounds
function preload()
{
		boyI=loadImage("boy.png");
		girlI = loadImage("girl_image.png");
		BI = loadImage("backgroundImg.png");
		groundI = loadImage("ground.png");
		jungleI = loadImage("jungle.jpg");
		stoneI = loadImage("stone.png");
		ST2I = loadImage("stone2.png");
		sunI = loadImage("sun.png");
		//music = loadSound("images/alan walker ignite.mp3");
}

//setting up the game
function setup() {
	var canvas1 = createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	
	m3 = new mango(1170,168,30);

	m4 = new mango(1039,118,30);
	m5 = new mango(1103,192,30)
	sun = createSprite(93,84,10,10);
	sun.addImage(sunI);
	sun.scale = 0.3;
	m6 = new mango(1007,226,30);
	m7 = new mango(938,227,30);
	m8 = new mango(954,150,30);
	m9 = new mango(1215,233,30)
	m10 = new mango(1022,99,30);
	m11 = new mango(990,66,30);
	m12 = new mango(897,216,30);
	m13 = new mango (1107,44,30);
	boy = createSprite(200,480,200,300);
	boy.addImage(boyI);
	boy.scale = 0.18;

	//image(boy ,200,340,200,300);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone1 = new Stone(105,380,50);

	slingshot1 = new Slingshot(stone1.body,{x:118,y:379});
	m14 = new mango(1061,187,30);
	
	Engine.run(engine);

}

function draw() {


  background("lightblue");
  Engine.update(engine);
  //music.play();
  //developer features ONLY. Remove before submitting.

  fill("red");
		//noStroke();
		text("Press Space to get a second attempt !!",517,45);
  strokeWeight(4);
  fill("red");

  text("x : "+mouseX,30,560);
  text("y : "+mouseY,80,560);

  treeObj.display();
  mango1.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  m11.display();
  m12.display();
  m13.display();
  m14.display();
  boy.display();
  sun.display();
  stone1.display()
 slingshot1.display();
 
  
  groundObject.display();



  Detect_Collision(stone1,mango1);
  Detect_Collision(stone1,m3);
  Detect_Collision(stone1,m4);
  Detect_Collision(stone1,m5);
  Detect_Collision(stone1,m6);
  Detect_Collision(stone1,m7);
  Detect_Collision(stone1,m8);
  Detect_Collision(stone1,m9);
  Detect_Collision(stone1,m10);
  Detect_Collision(stone1,m11);
  Detect_Collision(stone1,m12);
  Detect_Collision(stone1,m13);
  Detect_Collision(stone1,m14);

  if(keyCode === 32) {
	  Matter.Body.setPosition(stone1.body,{x:105, y:380});
	  sling2 = new Slingshot(stone1.body,{x:118,y:379});
	  sling2.display();
	  sling2.fly();
  }
}

function mouseDragged(){
	
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}

function Detect_Collision(stone1,mango1) {
	var mango_position = mango1.body.position;
	var stone_position = stone1.body.position;

	var distance1 = dist(stone_position.x,stone_position.y,mango_position.x,mango_position.y)

	if(distance1<=mango1.r+stone1.r) {
		Matter.Body.setStatic(mango1.body,false);
		
	}
}
 

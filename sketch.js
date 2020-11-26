var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,woow,g,g1,groungha,groundhaha,groundhahaha;
var box1,box2,box3,boxa,boxb,boxc;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	woow=loadImage("wow.jpg");
	g=loadImage("gg.jpg");
	g1=loadImage("ggg.jpg");
}

function setup() {
	createCanvas(1000, 600);
	rectMode(CENTER);
	
	groundha=createSprite(width, 580, width, 10);
	groundha.addImage(g1);

	groundhaha=createSprite(width-width, 580, width, 10);
	groundhaha.addImage(g1);

	groundhahaha=createSprite(width/2, 580, width, 10);
	groundhahaha.addImage(g);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	boxa=createSprite(width/2, 540, 150, 15);
	boxa.shapeColor=("red");

	boxb=createSprite(width/2+70, 500, 15, 95);
	boxb.shapeColor=("red");

	boxc=createSprite(width/2-70, 500, 15, 95);
	boxc.shapeColor=("red");

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 100 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	box1 =Bodies.rectangle(width/2, 540, 150, 30 , {isStatic:true} );
	World.add(world, box1);

	box2 =Bodies.rectangle(width/2+70, 500, 15, 95 , {isStatic:true} );
	World.add(world, box2);

	box3 =Bodies.rectangle(width/2-70, 500, 15, 95 , {isStatic:true} );
	World.add(world, box3);	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 550, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
background(woow);
  rectMode(CENTER);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  boxa.x= box1.position.x
  boxa.x= box1.position.x

  boxb.x = box2.position.x
  boxb.x = box2.position.x

  boxc.x = box3.position.x
  boxc.x = box3.position.x
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
	Matter.Body.setStatic(packageBody, false);
    
  }
}




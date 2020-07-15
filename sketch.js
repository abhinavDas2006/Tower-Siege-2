const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ball;
var ground,ground2;
var box1;

function setup() {
 createCanvas(2000,700);

  engine = Engine.create();
    world = engine.world;

 
 ball = new Ball(300,200,70);

  box1 = new Box (395,405,65,75);
  
  box2 = new Box (460,405,65,75);
  box3 = new Box (525,405,65,75);
  box4 = new Box (590,405,65,75);
  box5 = new Box (655,405,65,75);
  box6 = new Box (720,405,65,75);
  box7 = new Box (785,405,65,75);
  box8 = new Box (460,330,65,75);
  box9 = new Box (525,330,65,75);
  box10 = new Box (590,330,65,75);
  box11 = new Box (655,330,65,75);
  box12 = new Box (720,330,65,75);
  box13 = new Box (525,255,65,75);
  box14 = new Box (590,255,65,75);
  box15 = new Box (655,255,65,75);
  box16 = new Box (590,180,65,75);
  
  box17 = new Box2(940,290,55,65);
  box18 = new Box2(995,290,55,65);
  box19 = new Box2(1050,290,55,65);
  box20 = new Box2(1105,290,55,65);
  box21 = new Box2(1160,290,55,65);
  box22 = new Box2(995,225,55,65);
  box23 = new Box2(1050,225,55,65);
  box24 = new Box2(1105,225,55,65);
  box25 = new Box2(1050,160,55,65);


  ground = new Ground(600,450,497,15);
  ground2 = new Ground(1050,330,325,15);
  
  slingShot=new Slingshot(ball.body,{x:175,y:300})

  Engine.run(engine);
}

function draw() {
  background(79, 48, 3); 
  //Engine.update(engine); 

  
  textSize(30);
  fill("white");
  text("Drag the polygon to destroy the blocks",400,30);
  textSize(20);
  text("Press Space to get a second Chance to Play!!",925 ,650);
  ball.display();

  fill("lightgreen");
  strokeWeight(6);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill("turquoise");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill("orange");
  box13.display();
  box14.display();
  box15.display();

  fill("pink");
  box16.display();

  fill("lightgreen");
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  fill("turquoise");
  box22.display();
  box23.display();
  box24.display();

  fill("orange")
  box25.display();


  slingShot.display();
  ground.display();
  ground2.display();
 
  drawSprites();
}
function mouseDragged()
{
	Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})
  
}

function mouseReleased()
{
	
	slingShot.fly();
 
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(ball.body);
  }
}
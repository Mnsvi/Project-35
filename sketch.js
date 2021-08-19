// constants
const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

// variables
var engine, world;
var particles = [];
var boy, boyImg;
var bgImg;
var ground;
var score = 0;

//var flag = 0;
//var gameState = start;
//var gameState = END;

function preload(){
  getTime();
}

function setup() {

  // creating canvas 
  createCanvas(900,900);
  
  // creating engine and adding it to world
  engine = Engine.create();
  world = engine.world;

  //boy=createSprite(400, 700, 20, 20);
  //boy.addImage(boyImg);
  //boy.scale=0.1;

  // creating bodies 
  ground = new Ground(400, 890, 9000, 10);
  boy = new Boy(400,700, 100, 200);
  
  // running engine
	Engine.run(engine);

}

function draw() {
  
  // background
  if (bgImg)
  background(bgImg);

  // updating engine
  Engine.update(engine);

  //var collision = Matter.SAT.collides(particles.body, boy.body);
  //if (collision.collided){flag = 1;}

  // moving boy right
  if(keyDown("RIGHT_ARROW")){
    boy.body.position.x = boy.body.position.x + 2;
  }
  // moving boy left
  if(keyDown("LEFT_ARROW")){
    boy.body.position.x = boy.body.position.x - 2;
  }
  // moving boy up
  if(keyDown("UP_ARROW")){
    boy.body.position.y = boy.body.position.y - 2;
  }

  // particles
  if(frameCount % 50 === 0){
    particles.push(new Particles(random(width/2-15, width/2+20), 15, 15));
    score++;
  }

  // text
  fill("red");
  textSize(20);
  text("Score : "+ score,20,30);

  fill("red");
  textSize(25);
  text("Swipe the particles on the ground with the help of => & <= key!!", 80, 60);
 
  // displaying class
  ground.display();
  boy.display();
  // displying particles
  for(var i = 0; i < particles.length; i++){
  particles[i].display(); }

	// displaying sprites
	drawSprites();
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responsejson = await response.json();
  console.log(responsejson);
  var datetime = responsejson.datetime;
  console.log(datetime);
  var hour = datetime.slice(11,13);
  console.log(hour);
  if (hour >= 06 && hour <= 19){
  bg = "11.png" ;
  }
  else {bg = "8.png"}
  bgImg = loadImage(bg)
  }
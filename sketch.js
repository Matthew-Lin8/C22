const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;

var ground;
function setup() {
  createCanvas(400,400);
  
  myengine = Engine.create();
  myworld = myengine.world;

  var ground_options = {

    isStatic:true
  }
  var ball_options = {
  
  restitution: 0.9

  }

  ground = Bodies.rectangle(200,370,400,10,ground_options);
  ball = Bodies.circle(200,200,10,ball_options);
  World.add(myworld,ground);
  World.add(myworld,ball);
  console.log(ground); 
}

function draw() {
  background(0); 
  
  Engine.update(myengine); 
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);

  ellipse(ball.position.x,ball.position.y,20,20);
  
}







const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(100,390,400,20,ground_options);
    World.add(world,ground);

    var  ball_options={
        restitution :1.0
    }
ball= Bodies.rectangle(50,10,20,20,ball_options);   
World.add(world,ball);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,50);
    rect(ball.position.x,ball.position.y,20,20);
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var plane, hammer;
var rubic, rubic1;
var block, block1;
var stone, stone1;

function setup(){
    //create canvas
    var canvas = createCanvas(1200,600);

    //creates engine
    engine = Engine.create();
    world = engine.world;

    //creates ground
    plane = new Plane(600,height,1200,20)

    //creates hammer
    hammer = new Hammer(10,100);

    //creates rubber
    rubic = new Rubber(300,200, 40);
    rubic1 = new Rubber(400,200,40);

    //creates iron
    block = new Iron(500,300,60,60);
    block1 = new Iron(600,300,60,60);

    //creates stone
    stone = new Stone(700,400,80,80);
    stone1 = new Stone(800,400,80,80);
}

function draw(){
    //creates the background
    background("lightBlue");

    //update the engine
    Engine.update(engine);

    //makes variable visible on the screen
    plane.display();
    hammer.display();

    rubic.display();
    rubic1.display();

    block.display();
    block1.display();

    stone.display();
    stone1.display();
}
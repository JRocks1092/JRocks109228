const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a, b, c;
var engine, world;
var ground1, ground2, ground3;
var sling, poly;
var box1;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;
var box17;
var box18;
var box19;
var box20;
var box21;
var box22;
var box23;
var box24;
var box25;

function setup() {

    createCanvas(800, 400);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(300, 300, 300, 10);
    ground2 = new Ground(600, 200, 300, 10);
    ground3 = new Ground(400, 395, this.width, 20);

    poly = new polygon(100, 250);

    //ground1

    //layer1

    box1 = new Box(300, 275);
    box2 = new Box(270, 275);
    box3 = new Box(330, 275);
    box4 = new Box(240, 275);
    box5 = new Box(360, 275);
    box6 = new Box(210, 275);
    box7 = new Box(390, 275);

    //layer2

    box8 = new Box(300, 235);
    box9 = new Box(270, 235);
    box10 = new Box(330, 235);
    box11 = new Box(240, 235);
    box12 = new Box(360, 235);

    //layer3

    box13 = new Box(300, 195);
    box14 = new Box(270, 195);
    box15 = new Box(330, 195);

    //layer4

    box16 = new Box(300, 155);

    //ground2

    //layer1

    box17 = new Box(600, 175);
    box18 = new Box(570, 175);
    box19 = new Box(630, 175);
    box20 = new Box(540, 175);
    box21 = new Box(660, 175);

    //layer2

    box22 = new Box(600, 135);
    box23 = new Box(570, 135);
    box24 = new Box(630, 135);

    //layer3

    box25 = new Box(600, 95);

    sling = new SlingShot(poly.body, {x:100, y:250});

    a = Math.round(random(0, 255));
    b = Math.round(random(0, 255));
    c = Math.round(random(0, 255));
}

function draw() {

    background(rgb(45, 0, 0));

    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();

    box1.display(a, b, c);
    box2.display(a, b, c);
    box3.display(a, b, c);
    box4.display(a, b, c);
    box5.display(a, b, c);
    box6.display(a, b, c);
    box7.display(a, b, c);



    box8.display(a, b, c);
    box9.display(a, b, c);
    box10.display(a, b, c);
    box11.display(a, b, c);
    box12.display(a, b, c);

    box13.display(a, b, c);
    box14.display(a, b, c);
    box15.display(a, b, c);

    box16.display(a, b, c);


    //ground2

    box17.display(a, b, c);
    box18.display(a, b, c);
    box19.display(a, b, c);
    box20.display(a, b, c);
    box21.display(a, b, c);

    box22.display(a, b, c);
    box23.display(a, b, c);
    box24.display(a, b, c);

    box25.display(a, b, c);

    poly.display();
    sling.display();


    console.log(box1.body.position.x);
}

function mouseDragged(){

    Matter.Body.setPosition(poly.body,{x:mouseX, y:mouseY});

}

function mouseReleased(){

    sling.fly();

}
var pl,p2,asteroid1,asteroid2,asteroid3;
var blastImage,blast, spaceImage;
var spaceShip, spaceShipImage, laserImage;
var shoot = 0;
var score = 0;
var laser,astroidGroup,laserGroup;
var explosionSound, laserSound, explosionImage;
var instructions = 0;
var play = 1;
var end = 2;
var gameState = instructions;
var endLine, canvas;

function preload(){
    spaceImage=loadImage("space.png");
    spaceShipImage=loadImage("spaceship.png");
    laserImage=loadImage("laser.png");
    asteroid1=loadImage("as1.png");
    asteroid2=loadImage("as2.png");
    asteroid3=loadImage("as3.png");
    blastImage=loadImage("blast.png");
    explosionImage=loadImage("blast.png");
    explosionSound=loadSound("explosion.mp3");
    laserSound=loadImage("laser.mp3");
}

function setup(){
    canvas=createCanvas(1000,700);
    space=createSprite(250,350,30,20);
    space.addImage(spaceImage);
    space.velocityY =(5+score /10);
    spaceship = createSprite(250,600);
    spaceship.addImage(spaceshipImage);
    spaceship.scale = 0.6;
    p1= createSprite(250,600);
    p1.setcollider("rectangle",70,-27,5,265,156);
    p1.visible=false
    p2= createSprite(250,600);
    p2.setcollider("rectangle",70,-27,5,24,156);
    p2.visible=false
    asteroidGroup=new Group;
    laserGroup=new Group;
    endline=createSprite(250,700,500,5);
    endline.visible =false;
    
}
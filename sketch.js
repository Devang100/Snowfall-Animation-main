const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var boy,boyImg
var snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8,smow_img;
var world;
var engine;

function preload(){
  bg = loadImage("snow1.jpg");
  boyImg = loadImage("boy.png");
  snow_img = loadImage("mainsnow.png")
}

function setup() {

  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  boy =  createSprite(320, 230, 50, 50);
  boy.addImage("happy", boyImg);
  boy.scale = 0.4;
  

 
  }
  



function draw() {
  background(bg); 
  
  if(frameCount % 50 === 0){
    snow1 = createSprite(30,1);
    snow1.addImage("snow", snow_img);
    snow1.scale = 0.25;
    snow1.velocityY=  3;

    snow2 = createSprite(130,1);
    snow2.addImage("snow", snow_img);
    snow2.scale = 0.25;
    snow2.velocityY=  3;

    snow3 = createSprite(230,1);
    snow3.addImage("snow", snow_img);
    snow3.scale = 0.25;
    snow3.velocityY=  3;

    snow4 = createSprite(330,1);
    snow4.addImage("snow", snow_img);
    snow4.scale = 0.25;
    snow4.velocityY=  3;

    snow5 = createSprite(430,1);
    snow5.addImage("snow", snow_img);
    snow5.scale = 0.25;
    snow5.velocityY=  3;

    snow6 = createSprite(530,1);
    snow6.addImage("snow", snow_img);
    snow6.scale = 0.25;
    snow6.velocityY=  3;

    snow7 = createSprite(630,1);
    snow7.addImage("snow", snow_img);
    snow7.scale = 0.25;
    snow7.velocityY=  3;

    snow8 = createSprite(730,1);
    snow8.addImage("snow", snow_img);
    snow8.scale = 0.25;
    snow8.velocityY=  3;
    
}
  drawSprites();


}

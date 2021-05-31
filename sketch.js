const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rabbit, egg, arrow, spider;
var bgImg, rabbitAnimation, rabbitAnimation2, eggImg, arrowImg, spiderImg ;
var state = 0;

/*
function preload() {
    bgImg = loadImage("images/ground.png");
    rabbitAnimation = loadAnimation("images/rabbit2.png", "images/rabbit.png"); 
    rabbitAnimation2 = loadAnimation("images/rabbit2.png");
    eggImg = loadImage("images/egg.png");
    arrowImg = loadImage ("images/arrow.png");
    spiderImg = loadImage ("images/spider.png");
}
*/
function setup(){
    var canvas = createCanvas(displayWidth-100, displayHeight-200);
    engine = Engine.create();
    world = engine.world;

    //rabbit = createSprite(50,height/2);
    //sprite.addAnimation() or sprite.addImage()
    
    //rabbit.addAnimation("bunny", rabbitAnimation);
}

function draw(){
    if(state === 0){
        background('#ffb6c1');
        screen1();
    }
    else if(state === 1){
        //background(bgImg);
        //play();
    }

    Engine.update(engine);
    //drawSprites();

    //if keyDown then velocityX is > 0 and if keyWentUp then velocityX = 0
    //if keyDown then rabbit.x increases a little 
}

function screen1(){
    textSize(35)
    fill("purple")
    text("Tommorow is the easter egg festival but the easter \negg bunny needs your help to find his easter eggs.\nHe needs to cross some creepy spiders and follow \nthe clues to get to the easter eggs.\n (you can control him by pressing space key) \n All the best! \npress enter to continue. ", 60, 50)
}

function keyPressed(){
    if(keyCode === 13){
        //state+=1;
      if(state === 0)
        state = 1;
    }
}
/*
function play(){
    //display the rabbit 
    if(keyDown(RIGHT_ARROW)){
        rabbit.velocityX = 4;
    }

    if(keyWentUp(RIGHT_ARROW)){
        rabbit.velocityX = 0;
    }
}
*/





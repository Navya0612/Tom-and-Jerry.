var canvas;
var bg;
var cat, catImg1,catImg2;
var mouse, mouseImg1,mouseImg2;

function preload() {
    bg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    canvas = createCanvas(1000,800);

    cat = createSprite(870, 600);
    cat.addAnimation("sleeping", catImg1 );
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("standing", mouseImg1);
    mouse.scale = 0.15;

}

function draw() {

    background(bg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("cat3", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("cat3");
        mouse.addAnimation("mouse3", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouse3");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("running", catImg2);
        cat.changeAnimation("running");
        
        mouse.addAnimation("teasing", mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("teasing");
    }
}































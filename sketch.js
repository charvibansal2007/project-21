var canvas;
var music;
var ball , block1 , block2 , block3 , block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    block1 = createSprite( 725, 590 , 200 , 20);
    block1.shapeColor = "yellow";

    block2 = createSprite(block1.x-230, 590 , 200 , 20);
    block2.shapeColor = "blue";

    block3 = createSprite(block2.x-230, 590 , 200 , 20);
    block3.shapeColor = "purple";

    block4 = createSprite(block3.x-230, 590 , 200 , 20);
    block4.shapeColor = "green";

    //create box sprite and give velocity

    ball = createSprite(random(20,750),300,20,20);
    ball.shapeColor = "white";
    ball.velocityX = 4;
    ball.velocityY = 4;
}

function draw() {
    background(rgb(10,10,10));

    if(ball.x<0){

        music.stop();
        ball.velocityX = 3;

    }else if(ball.x>800){
        music.stop();
        ball.velocityX = -3;
    }

    if(ball.y<0){

        music.stop();
        ball.velocityY = 3;
    }

    //add condition to check if box touching surface and make it box

   if(isTouching(ball,block1)){

    ball.shapeColor = "yellow";
    bounceOff(ball , block1);
    music.play();

   }else if(isTouching(ball,block2)){
    
    ball.shapeColor = "blue";
    bounceOff(ball , block2);
    music.play();

   }else if(isTouching(ball,block3)){

    ball.shapeColor = "purple";
    bounceOff(ball , block3);
    music.play();

   }else if (isTouching(ball , block4)){

    ball.shapeColor = "green";
    bounceOff(ball , block4);
    music.play();

   }
   
    drawSprites();
}


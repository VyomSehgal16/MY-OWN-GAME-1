var obstacle, PC, obstacleGroup, NPC, coin, coinsGroup, puppy, diamond, diamondGroup, backgroundimg, ground, groundImage, bg;
var gameState = "play";
var score = 0;

function preload(){
    backgroundimg = loadImage("Background(1).png");
    puppy = loadImage("Puppy.png");
}

function setup(){

    createCanvas(500,500);

    bg = createSprite(250,250,500,500);
    bg.addImage(backgroundimg);
    bg.scale = 2.2;
    bg.velocityX = -4;
    ground = createSprite(250,500,500,20);
    ground.shapeColor = "black";
    ground.velocityX = -4;
    PC = createSprite(50,480,30,30);
    obstacleGroup = new Group();
    coinsGroup = new Group();
    diamondGroup = new Group();

}

function draw(){
    
    background(0);
    if(keyDown("space")){
        PC.velocityY = -13;
    }
    PC.velocityY = PC.velocityY + 0.7;
    if (ground.x < 50){
        ground.x = ground.width/2;
    }
    if (bg.x < 30){
        bg.x = bg.width/2;
    }
    PC.collide(ground);
    if(coinsGroup.isTouching(PC)){
        coinsGroup.destroyEach();
        score = score + 5;
    }
    spawnObstacles();
    spawnCoins();
    spawnDiamonds();
    drawSprites();

}

function spawnObstacles(){
    if(frameCount % 123 === 0) {
        obstacle = createSprite(500,450,45,40);
        obstacle.height = Math.round(random(40,255));
        obstacle.shapeColor = "black";
        obstacle.velocityX = -4;
        obstacle.lifetime = 350;
        obstacleGroup.add(obstacle);
    }
}

function spawnCoins(){
    if(frameCount % 113 === 0) {
        coin = createSprite(500,400,20,20);
        coin.y = Math.round(random(100,400));
        coin.shapeColor = "yellow";
        coin.velocityX = -4;
        coin.lifetime = 350;
        coinsGroup.add(coin);
    }
}
function spawnDiamonds(){
    if(frameCount % 281 === 0) {
        diamond = createSprite(500,400,30,30);
        diamond.y = Math.round(random(100,400));
        diamond.shapeColor = "blue";
        diamond.velocityX = -5;
        diamond.lifetime = 350;
        diamondGroup.add(diamond);
    }
}
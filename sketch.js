var gardenImage, garden

var catImage, catMoveImages, catEndImage

var mouseImage, mouseMoveImages, mouseEndImage


function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png")

    catImage=loadImage("images/cat1.png");
    catMoveImages=loadAnimation("images/cat2.png","images/cat3.png")
    catEndImage=loadImage("images/cat4.png")

    mouseImage=loadImage("images/mouse1.png");
    mouseMoveImages=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseEndImage=loadImage("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    garden=createSprite(500, 400, 1000, 800);
    garden.addImage(gardenImage);
    
    //create tom and jerry sprites here

    cat = createSprite(750, 600, 100, 100)
    cat.addImage(catImage)
    cat.scale = 0.2;

    mouse = createSprite(250, 600, 100, 100)
    mouse.addImage(mouseImage)
    mouse.scale = 0.15;


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.velocityX = 0

        cat.addAnimation("catEndImage", catEndImage)
        cat.changeAnimation("catEndImage")

        mouse.addAnimation("mouseEndImage", mouseEndImage)
        mouse.changeAnimation("mouseEndImage")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW) {
        cat.velocityX = -5
        cat.addAnimation("catMoveImages", catMoveImages)
        cat.changeAnimation("catMoveImages")

        mouse.addAnimation("mouseMoveImages", mouseMoveImages)
        mouse.changeAnimation("mouseMoveImages")
    }
    

}

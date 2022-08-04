var man, zombie, arrow, snake, spider, stone, people, ground;
var score = 0
function preload() {
  backgroundImage = loadImage("./assets/bg.jpg");
  man1Image = loadImage("./assets/manrunning1.png");
  man2Image = loadImage("./assets/manrunning2.png");
  man3Image = loadImage("./assets/manrunning3.png");
  man4Image = loadImage("./assets/manrunning4.png");
  man5Image = loadImage("./assets/manrunning5.png");
  man6Image = loadImage("./assets/manrunning6.png");
  man7Image = loadImage("./assets/manrunning7.png");
  man8Image = loadImage("./assets/manrunning8.png");
  man_running = loadAnimation("./assets/manrunning1.png", "./assets/manrunning2.png", "./assets/manrunning3.png", "./assets/manrunning4.png", "./assets/manrunning5.png", "./assets/manrunning6.png", "./assets/manrunning7.png", "./assets/manrunning8.png")
  groundImage = loadImage("./assets/ground.png")
  zombieImage = loadImage("./assets/zombie.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  man = createSprite(120, 350, 20, 50)
  ground = createSprite(windowWidth/2, 560, windowWidth, 70)
  ground.velocityX = -7;

  man.addAnimation("running", man_running);
  man.scale = 0.8
  ground.addImage("ground", groundImage);
  ground.scale = 0.15

  zombiesGroup = new Group()
    
}

function draw() {
  background(backgroundImage);
  text("Score: "+ score, 50,50);
  
  if (ground.x<0){
    ground.x = ground.width/2
  }
 
  spawnZombies();
 

  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function spawnZombies() {
  if (frameCount % 60 === 0) {
    var zombie = createSprite(1200,400,40,10);
    //zombie.y = Math.round(random(80,120));
    zombie.addImage(zombieImage);
    zombie.scale = 1;
    zombie.velocityX = -3;
    zombie.lifetime = 200;
    
    //zombie.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    zombiesGroup.add(zombie);
  }
}

var p ,treximg,gi , groundimg;

function preload(){
  treximg = loadAnimation("trex1.png","trex3.png","trex4.png")
  groundimg = loadAnimation("ground2.png")
}

function setup(){
  createCanvas(1920,1080)
  //create a trex sprite

  p = createSprite(250,100,50,50)
  p.addAnimation("running",treximg);
  p.scale = 1
  gi = createSprite(250,100,100,100)
  gi.addAnimation("ground",groundimg);
}

function draw(){
  background("white")
  drawSprites();
  
}

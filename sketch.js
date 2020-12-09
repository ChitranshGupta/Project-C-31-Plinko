var d1,d2,d3,d4,d5;

var particles = [];
var plinkos = [];
var divisions = [];
 
var divisionHight = 300;
function setup() {
  createCanvas(480,800);
 
  var b1 = createSprite(0, 400, 20, 800);
    b1.shapeColor=("red");

  var b2 = createSprite(480, 400, 20, 800);
    b2.shapeColor=("red");

  var b3 = createSprite(240, 800, 480, 20);
    b3.shapeColor=("red");  

  var b4 = createSprite(240, 0, 480, 20);
    b4.shapeColor=("red"); 




  //for (var k = 0; k <=width; k = k + 80) {
  //  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  //}

  /*if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));

  }*/ 

  var ground = createSprite(240, 783, 459, 12);
  ground.shapeColor=("white");
  
}

function draw() {
  background(0); 

  for (var i = 80; i < 480; i=i+80) 
  {
    var plinko1 = createSprite(i, 120, 25, 25);
    plinko1.shapeColor = rgb(255, 255, 255);
  
  }

  for (var i = 40; i < 480; i=i+80) 
  {
    var plinko2 = createSprite(i, 200, 25, 25);
    plinko2.shapeColor = rgb(255, 255, 255);
  
  }

  for (var i = 80; i < 480; i=i+80) 
  {
    var plinko3 = createSprite(i, 280, 25, 25);
    plinko3.shapeColor = rgb(255, 255, 255);
  
  }

  for (var i = 40; i < 480; i=i+80) 
  {
    var plinko4 = createSprite(i, 360, 25, 25);
    plinko4.shapeColor = rgb(255, 255, 255);
  
  }


  for (var i = 80; i < 480; i=i+80) 
  {
    var division = createSprite(i, 627, 10, 300);
    division.shapeColor = rgb(255, 200, 0);
  
  }

  drawSprites();
}
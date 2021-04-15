const Engine = Matter.Engine;
const World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
var particles;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var count=0;

var gameState= "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 




function draw() {
  background("black");

  textSize(20)
 text("Score : "+score,20,30);
 
 textSize(23)
 text("500", 20, 520)
 text("500", 100, 520)
 text("500", 180, 520)
 
 text("250", 260, 520)

 text("100", 340, 520)
 text("100", 420, 520)
 text("100", 500, 520)

 text("200", 580, 520)
 text("200", 660, 520)
 text("200", 740, 520)


 Engine.update(engine);
 
  //particles.display();

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
 
   if(particles!=null){
     
    particles.display();
   
 
    if(particles.body.position.y>760){


       if(particles.body.position.x<220){

    score=score+500;
    particles=null;
    if (count>=5) gameState="end";
     }
  
     else if(particles.body.position.x>221 && particles.body.position.x<300){

      score=score+250;
      particles=null;
      if (count>=5) gameState="end";
      }
 
 
 
 else if(particles.body.position.x>301 && particles.body.position.x<600){

 score=score+100;
 particles=null;
 if (count>=5) gameState="end";
 }
  else if(particles.body.position.x>601 && particles.body.position.x<900){

    score=score+200;
    particles=null;
    if (count>=5) gameState="end";
}

}
  }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  
   if(gameState==="end"){
     textSize(80)
    text("GAME OVER", 170, 250)
   }


  }


  function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particles=new particle(mouseX, 10, 10); 
  }   
}

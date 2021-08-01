var Engine = Matter.Engine,
var World = Matter.World,
var Events = Matter.Events,
var Bodies = Matter.Bodies; 

var balls = [];
var plinkos = [];
var divisions = [];
var ball;
var divisionHeight = 300;
var score = 0;
var count = 0;
var gameState = "start";

function setup() 
{
  createCanvas(800, 800);
  
  engine = Engine.create();
  world = engine.world;

  g = new Ground(0,800, 40,40);
  console.log(g);
  
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <= width; k+=80) 
   {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j+=50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j+=50) 
    {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j+=50) 
    {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j+=50) 
    {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() 
{
  background("black");
  
  
  if(gameState === "start")
  {
  fill("green")
  textSize(30)
  text("SCORE : "+score,10,25);

  fill("blue");
  textSize(35)
  text(" 500 ", 4, 780);
  text(" 400 ", 82, 780);
  text(" 300 ", 160, 780);
  text(" 200 ", 240, 780);
  text(" 100 ", 320, 780);
  text(" 100 ", 400, 780);
  text(" 200 ", 480, 780);
  text(" 300 ", 561, 780);
  text(" 400 ", 641, 780);
  text(" 500 ", 721, 780);

  if(ball != null )
  {
     ball.display();
  }   
      if (ball.body.position.y > 760)
      {
            if (ball.body.position.x < 80 && ball.body.position.x > 0) 
            {
                score = score + 500;      
                ball = null;                                     
            }

            if (ball.body.position.x < 160 && ball.body.position.x > 80) 
            {
                score = score + 400;      
                ball = null;                         
            }

            if (ball.body.position.x < 240 && ball.body.position.x > 160) 
            {
                score = score + 300;      
                ball = null;
            }
             
            if (ball.body.position.x < 320 && ball.body.position.x > 240) 
            {
                score = score + 200;      
                ball = null;
            }

            if (ball.body.position.x < 400 && ball.body.position.x > 320) 
            {
                score = score + 100;      
                ball = null;
            }
            
            if (ball.body.position.x < 480 && ball.body.position.x > 400) 
            {
                score = score + 100;      
                ball = null;
            }
         
            if (ball.body.position.x < 560 && ball.body.position.x > 480) 
            {
                score = score + 200;      
                ball = null;
            }

            if (ball.body.position.x < 640 && ball.body.position.x > 560) 
            {
                score = score + 300;      
                ball = null;
            }
 
            if (ball.body.position.x < 720 && ball.body.position.x > 640) 
            {
                score = score + 400;      
                ball = null;
            }
            
            else if (ball.body.position.x < 800 && ball.body.position.x > 720) 
            {
                score = score + 500;      
                ball = null;
            }              

            for (var i = 0; i < plinkos.length; i++) 
  {
     plinkos[i].display();  
  }
 
        if ( count >= 10)
        { 
        gameState = "end"; 
        }   
      

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
      }
  }
  
  Engine.update(engine);
  ground.display();
  g.display();
  
  if ( gameState === "end") 
  {  
    fill("red");  
    textSize(100);
    text("GameOver", 150, 250);
    
    fill("yellow");
    textSize(60);
    text("SCORE :" + score, 220 ,500);

    plinkos = [];
    balls = [];
    divisions = [];
  }
   
}

function mousePressed()
{
  if(gameState!=="end")
  {
     count++;
     ball=new Ball(mouseX, 10, 10, 10); 
  }   
}
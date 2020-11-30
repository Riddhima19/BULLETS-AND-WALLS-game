var wall,thickness;
var speed,bullet,weight;

function setup() {
createCanvas(1600,400);

bullet=createSprite(50,200,50,50);

wall=createSprite(1200,200,thickness,height/2);

speed=random(223,321);

thickness=random(45,83);

weight=random(30,80);

bullet.velocityX = speed;



}

function draw() {

  background("yellow");  

  if(wall.x-bullet.x < (bullet.width+wall.width)/3){
    bullet.velocityX=0;

    var deformation=0.5*weight*speed*speed/22500;
    if (deformation>180)

    {

      bullet.shapeColor=color(255,0,0);
    
    }

    if (deformation>180 && deformation>100)

    {
      bullet.shapeColor=color(230,230,0);
    
    }

    if (deformation<100)
    {
      bullet.shapeColor=color(0,255,0);
    
    }
    if (hasCollided(wall,bullet))
    {
      
      bullet.velocityX=0;

      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    
    if(damage>10)

    {

      wall.shapeColor=color("green");

    }


    if(damage<10)
    {
      wall.shapeColor=color("red");

    }

    }

  }


  drawSprites();

}
function hasCollided(lbullet,lwall)

{

  bulletRightEdge=lbullet.x+lbullet.width;

  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge)


  {
    
    return true;

  }
return false;
}
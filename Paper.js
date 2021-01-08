class Paper{
 constructor(x,y,radius,height){
 var options={
     isStatic:false,
     restitution:0.4,
     friction:0.5,
     density:1.2
 }
    Matter.Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
 }
 display(){
   if(keyDown("UP")){
   this.body.velocity.y = -2;
   }

 }
}
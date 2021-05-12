class paper                  
{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2,
        }
            this.body = Bodies.circle(100,595,165,options);
            this.x = 100;
            this.y = 595;
            this.radius = 165;
            this.image=loadImage("paper.png");
            World.add(world,this.body);
        
}
display(){
    push();
    var P = this.body.position;
    imageMode(CENTER);
    image(this.image,100,595,165);
    fill(0);
    
    pop();
}

}
function keyPressed(){
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
    }
}






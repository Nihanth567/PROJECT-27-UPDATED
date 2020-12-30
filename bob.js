class Bob {
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0.3,
            density:1.2

        }

        //this.paper.circle(x,y,radius,options);
        this.paper = Bodies.circle(x, y,radius,options);
        //this.image = loadImage("sprites/paper.png")
       this.radius = radius;

       World.add(world,this.paper)
        
       
    }

    display(){
       var pos = this.paper.position;
      // var angle = this.body.angle;
       
        push();
       //translate(pos.x,pos.y);
        //rotate(angle);

        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);

        fill("yellow");
       
      
        
        // image(this.image, , 50, 50);
        pop();
    }

}
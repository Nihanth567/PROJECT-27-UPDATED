class chain{
    constructor(bodyA,pointB,x,y){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            length:10,
            x:20,
            y:50
            
        }
        this.chain = Constraint.create(options);
        //this.x=x;
        //this.y=y;

        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;

        push();
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}




/*class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            length:10
        }
        this.chain=Constraint.create(options);

        World.add(world,this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        push();
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}*/

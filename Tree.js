class Tree{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.tree = loadImage("Plucking mangoes/tree.png");

        this.pointB = pointB
        this.tree = Constraint.create(options);
        World.add(world, this.tree);
    }

    attach(body){
        this.tree.bodyA = body
    }

    fly(){
        this.tree.bodyA = null;
    }

    display(){
        image(this.tree,200,20);
        //image(this.sling2,170,20);
    
        if(this.tree.bodyA){
            var pointA = this.tree.bodyA.position;
            var pointB = this.pointB;
            push();
            //strokeWeight(4);
            stroke(48,22,8);
            if (pointA.x<200) {
            strokeWeight(7);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            //image(this.sling3,pointA.x-30, pointA.y-10, 15, 30);
            }
            else{
                strokeWeight(3);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
                //image(this.sling3,pointA.x+25, pointA.y-10, 15, 30); 
            }
            
            pop();
        }
    } 
}
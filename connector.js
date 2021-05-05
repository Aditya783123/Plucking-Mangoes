

class Connector{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        };
        this.pointB=pointB;
        this.connector = Constraint.create(options);
        World.add(world, this.connector);
    }
    fly(){
        this.connector.bodyA = null;
    }
    attach(body){
        this.connector.bodyA=body;
        
    }
    display(){
        if(this.connector.bodyA){
            var pointA = this.connector.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}

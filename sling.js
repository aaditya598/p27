class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.02,
            length: 200
        }
        this.pointB = pointB
        this.SlingShot= Matter.Constraint.create(options);
        World.add(world, this.SlingShot);
    }

      display(){
   if(this.SlingShot.bodyA){
   
        var pointA = this.SlingShot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("yellow")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
    
}




}
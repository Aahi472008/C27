class Slingshot {
    constructor(bird,log) {
        var option = {
            stiffness:0.04, 
            length:10,
            bodyA:bird,
            bodyB:log  
        }
        this.sling=Constraint.create(option)
        World.add(world,this.sling);
    }
    display() {
    var pointA = this.sling.bodyA.position
    var pointB = this.sling.bodyB.position
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}
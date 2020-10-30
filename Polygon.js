class Polygon {
    constructor(bodyA, pointB) {
        var option ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
            }
    this.pointB = pointB             
    this.sling = Constraint.create(option) 
  World.add(world, this.sling)
    }

    Fly() {
this.sling.bodyA = null
}    
display() {
    if (this.sling.bodyA){  
    var pointA = this.sling.bodyA.position
    var pointB = this.pointB
    
    stroke(48, 22, 8)

    strokeWeight(4)
    line(pointA.x, pointA.y, pointB.x, pointB.y)
}
}
}


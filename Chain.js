class Chain{
    constructor (a,b){

        var options = {
            bodyA:a,
            pointB:b,
            stiffness:0.05,
            length:5
        }
        this.chain = Constraint.create(options)
        World.add(world, this.chain)
    }
    display(){
        stroke("blue")
        strokeWeight(5)
        if (this.chain.bodyA){
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
        }
    }

    disconnectChain(){
        this.chain.bodyA = null
    }
    
}
class Paper {

    constructor(x,y,radius){
        this.x=x
        this.y=y
        this.radius=radius
        this.image=loadImage("paper.png")
        var options={
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0
        }

        this.body=Bodies.circle(x,y,radius/2 ,options)
        World.add(world,this.body)
    }

    display(){
        var bobpos=this.body.position
        push()
        translate(bobpos.x,bobpos.y)
         rectMode(CENTER)
         fill(255)
         image(this.image,0,0,this.radius,this.radius)
         pop()
    }
} 
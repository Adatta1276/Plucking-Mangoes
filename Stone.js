class Stone {
    constructor(x,y,r) {
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
            density : 1.2
        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.image = loadImage("images/stone.png");
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world, this.body);

    }

    display() {
        var pos1 = this.body.position;

         push();
         translate(pos1.x,pos1.y);
         fill(255,0,255);
         imageMode(CENTER);
	     image(this.image, 0,0,this.r, this.r)
         pop();
    }
}



class Ball{
    constructor(x, y, width, height) {
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        this.body.position.x= mouseX; 
        this.body.position.y= mouseY; 
        push();
        translate(this.body.position.x, this.body.position.y);
        rect(0, 0, this.width, this.height);
        pop();
      }
}
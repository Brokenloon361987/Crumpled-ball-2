class bawl{
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/paper.png");
      
      
      World.add(world, this.body);
    }
    display(){

      // this.body.x = mouseX;
      // this.body.y = mouseY;
      
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x , pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("maroon");
      //rect(0, 0, this.width, this.height);
      image(this.image, 0, 0, this.width, this.height);
      pop();


    }
  }
  
class Boy{
  constructor(x, y, width, height){

      var options = {
          //bounce: 0.1
          //density :1.0,
          //isStatic: true
          stiffness: 1.8,
          
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Player-03.png");
      this.image.scale = 0.1;
      World.add(world, this.body);
      //Matter.Body.setMass(this.body, this.body.mass*5)
  }

  display(){
      push();
      var angle = this.body.angle;
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0, this.width, this.height);
      pop();
  }


}
class Block {
    constructor(x,y,width,height) {
      var options = {
          restiution:1.0,
      }
      this.visiblity = 255;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      if(this.body.speed <3){
     push();
     translate(pos.x,pos.y);
        rotate(this.body.angle)
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
    }else{
World.remove (world,this.body)
push();
this.visiblity = this.visiblity -5;
pop();
    }
  }
  score(){
    if(this.visiblity===0){
      score++;
    }
  }
  };

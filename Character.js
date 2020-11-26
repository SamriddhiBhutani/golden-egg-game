class Character{
    constructor(x,y,width,height){
      var options = {
          isStatic: false,
      }
      this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
      World.add(world,this.body)
    }
    display(){
        rectMode(CENTER);
        rect(this.position.x,this.position.y,this.width,this.heigth);
        
    }
}
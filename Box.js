class Box {
  constructor(x,y) {
   
    this.body = Bodies.rectangle(x,y,30,40);
    this.width = 30;
    this.height = 40;
   
    World.add(world, this.body);
  }
  display(a,b,c){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(rgb(a,b,c));
    stroke("black");
    rect(pos.x, pos.y, this.width, this.height);
  }
};

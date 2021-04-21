class Iron{
	constructor(x,y)
	{
	var options = {
		'restitution': 0.8,
		'friction':3,
		'density':30,
	}
      this.body= Bodies.rectangle(x,y,80,80,options);
      this.width = 80;
      this.height= 80;
      
      World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    rectMode(CENTER);
   fill("green");
   rect(pos.x,pos.y,this.width,this.height);
}
}
class Stone{
	constructor(x,y)
	{
	var options = {
		'restitution': 0.8,
		'friction':0.9,
		'density':12,
	}
      this.body= Bodies.rectangle(x,y,70,30,options);
      this.width = 60;
      this.height= 60;
      
      World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    rectMode(CENTER);
   fill("purple");
   rect(pos.x,pos.y,this.width,this.height);
}
}
class Snow{
	constructor(x,y)
	{
		var options={
			restitution :0,
            friction :1,
			density :0.005
			}
		this.x=x;
		this.y=y;
		this.r=40
		this.image=loadImage("snow4.webp")
		this.body = Bodies.circle(this.x, this.y, 40, options);
		World.add(world, this.body);
	}

	display()
	{
		var snowPos=this.body.position;	
		push()
		//translate(snowPos.x, snowPos.y);
		// rectMode(CENTER);
		//rotate(this.body.angle)
		//fill(255,0,255)
		imageMode(CENTER);
       //ellipseMode(CENTER);
		image(this.image, snowPos.x, snowPos.y,80, 80)
		pop()
 }
 changePosition(){
	if(this.body.position > height){
		Matter.Body.setPosition(this.body,{x:random(0,1400),y:random(0,50)});
      
	}
}
}

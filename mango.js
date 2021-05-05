

class Mango{
 constructor(x, y, r){
    var options={
    isStatic:true,
    restitution:0,
    friction:1,
    };

    this.body = Bodies.rectangle(x, y, r, r, options);
    this.x = x;
    this.y = y;
    this.r = r;
    this.image = loadImage("mango.png");
    World.add(world, this.body);
 }
 
 display()
 {
    var mangoPos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(mangoPos.x, mangoPos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r*2, this.r*2);
    pop();
 }
}
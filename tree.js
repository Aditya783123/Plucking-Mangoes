class Tree{
    constructor(x, y){
        this.x=x;
        this.y=y;
        this.treeWidth=450;
        this.treeHeight=600;
        this.treeThickness=10;
        this.image=loadImage("tree.png");
        this.body=Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeThickness, {isStatic:true});
        World.add(world, this.body);
    }
    display(){
        var treePos = this.body.position;
        push();
        translate(treePos.x, treePos.y+10);
        imageMode(CENTER);
        image(this.image, 0, -this.treeHeight/2, this.treeWidth, this.treeHeight);
        pop();
    }
}
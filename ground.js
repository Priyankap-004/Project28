class Ground {
    constructor(x,y,w,h){
        var option ={
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,w,h,option);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        
        fill("darkgreen");
        rect(0,0,this.w,this.h);
        pop();
    }
}
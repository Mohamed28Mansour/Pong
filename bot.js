class Bot {
    constructor(ball){
    this.width = 10;
    this.height = 100;
    this.x = width - this.width;
    this.y = height/2 - this.height/2;
    this.score = 0;
    this.speed = 10;
    }
    preloadBot(){

    }
    setupBot(){

    }
    drawBot(){
        rect(this.x, this.y, this.width, this.height);
        text(this.score, 3*width/4, height/5);
        fill("white");
        textSize(20);
    }

    /*moveUp(){
        if (this.y > this.x || this.y > height/2 - this.height*2)
        this.y -= this.speed;
    }
    moveDown(){
        if (this.y < height - this.height)
        this.y += this.speed;
    }*/
}
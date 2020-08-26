class Ball {
    constructor(player, bot){
        this.player = player;
        this.bot = bot;
        this.x = Math.floor(Math.random() * 300) + 50;
        this.y = height/2;
        this.diameter = 15;
        this.velocityX = 3;
        this.velocityY = 3;
    }
    preloadBall(){

    }
    setupBall(){

    }
    drawBall(){
        circle(this.x, this.y, this.diameter)
    }
    moveBall(){
        this.x += this.velocityX;
        this.y += this.velocityY;
        
    }
    collision(){
     if (this.y < this.diameter/2 || this.y > height - this.diameter/2) {
       this.velocityY *= -1;
        }

      if ((this.y > this.bot.y &&
        this.y < this.bot.y + this.bot.height) &&
        (this.x + (this.diameter/2) >= this.bot.x)) {
        this.velocityX *= -1.2;
        }

  if ((this.y > this.player.y &&
    this.y < this.player.y + this.player.height) &&
    (this.x - (this.diameter) <= this.player.x)) {
    this.velocityX *= -1.2;
        }
    }

    moveBot(){
        if (this.y > (this.bot.y + this.bot.height/2)){
            this.bot.y += this.bot.speed;
        } else {this.bot.y -= this.bot.speed}
    }

reset(){
        this.x = Math.floor(Math.random() * 300) + 50;
        this.y = height/2;
        this.diameter = 15;
        this.speed = 5;
        this.velocityX = 3;
        this.velocityY = 3;
    }
stopGame(){
        this.velocityX = 0;
        this.velocityY = 0;
        text(`Game Over`, 50, 50);
        //textAlign(CENTER, CENTER);
}

    scoreCounter (){
        if (this.x < this.player.x) {
        this.bot.score += 1;
        this.reset();
        }
        if (this.x > this.bot.x) {
        this.player.score += 1;
        this.reset();
        }
        if (this.player.score === 5 || this.bot.score === 5){
            this.stopGame();
        }
    }
}
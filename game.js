class Game {
    constructor(){
        this.width = 2;
        this.height = 10;
        this.x = width/2 - this.width/2;
        this.y = 0;
    }
    preloadGame(){

    }
    setupGame(){
        this.player = new Player();
        this.bot = new Bot();
        this.ball = new Ball(this.player, this.bot);
    }
    drawGame(){
        this.player.drawPlayer();
        this.bot.drawBot();
        this.ball.drawBall();
        this.ball.moveBall();
        this.ball.collision(this.player, this.bot);
        this.ball.scoreCounter();
        this.ball.moveBot();
    }
    drawNet(){
        for (let i = 0; i <= height; i+=15){
            rect(width/2 - 1, 0 + i, 2, 10)
        }
    }

}
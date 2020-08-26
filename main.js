const game = new Game();
let lvl = 0;

function preload(){
    game.preloadGame();
}
function setup(){
    let canvas = createCanvas(width, height);
    game.setupGame();
}
function draw(){
    clear()
    if (lvl == 0){
        text(`Press Space to Start`, 100, 100)
        fill (`white`)
    }
    if (lvl == 1){
    game.drawNet();
    game.drawGame();
    if (keyIsDown(87)){
        game.player.moveUp()
    }
    if (keyIsDown(83)){
        game.player.moveDown()
    }
}
   // if (keyIsDown(38)){
   //     game.bot.moveUp()
   // }
   // if (keyIsDown(40)){
   //     game.bot.moveDown()
   //}
}

function keyPressed(){
    if (keyCode === 32){
        lvl = 1
    }
}

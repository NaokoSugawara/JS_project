import Player from "./player";

export default class Game {

    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.x = 375; // initial x position
        this.y = canvas.height-150; // Initial Y position

        this.player = new Player(this, this.canvas, this.ctx, this.x, this.y);
        this.gameLoop();
    }

    drawBaseline(){
        this.ctx.beginPath();
        this.ctx.moveTo(50, 500);
        this.ctx.lineTo(750, 500);
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
    }

    gameLoop(){
        this.player.draw();
        this.drawBaseline();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
   


    // jump() {
    // }

    // animate(){

    //     requestAnimationFrame(this.animate);
    //     // this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);
    //     game.drawBaseline();
    //     game.drawCharactor();
    // }

}


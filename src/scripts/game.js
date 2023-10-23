import Player from "./player";
import Obstacles from "./obstacles";

export default class Game {

    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        // this.position = {
        //     x: 375, // initial x position
        //     y: canvas.height-150 // Initial Y position
        // }


        this.img = new Image();
        this.img.src = './src/img/background.jpg';

        this.obstacles = new Obstacles(this.ctx);
        this.player = new Player(this, this.obstacles, this.canvas, this.ctx);
// debugger
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
        // debugger
        this.player.draw();
        this.drawBaseline();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
   
    drawBackground(){
        this.ctx.drawImage(this.img, 0, 0);
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


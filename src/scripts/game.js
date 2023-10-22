import Player from "./player";

export default class Game {

    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.x = 375; // initial x position
        this.y = canvas.height-150; // Initial Y position

        this.img = new Image();
        this.img.src = './src/img/background.jpg';

        this.player = new Player(this, this.canvas, this.ctx, this.x, this.y);


        // debugger
        // this.img.addEventListener(
        //     "load",
            
        //     this.ctx.drawImage.call(this, args),
        //     false,
        // );

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
        // debugger
        this.ctx.drawImage(this.img, 0, 0);
        // img.onload = () => {
        //     this.ctx.drawImage(img.src, 0, 0);
        // }
        // img.onload();
        
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


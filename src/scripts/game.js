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

        this.failCnt = 0;

        this.img = new Image();

        this.obstacles = new Obstacles(this.ctx);
        this.player = new Player(this, this.obstacles, this.canvas, this.ctx);
// debugger

        this.img.src = './src/img/background.jpg';

        this.img.onload = () => {
            this.drawBackground();
            this.player.drawImage();
        }

        const start = document.getElementById('start');
        start.addEventListener("click", () => {
            this.gameLoop();
            // Disable the button
            start.disabled = true;
        });

    }

    // drawBaseline(){
    //     this.ctx.beginPath();
    //     this.ctx.moveTo(50, 500);
    //     this.ctx.lineTo(750, 500);
    //     this.ctx.lineWidth = 1;
    //     this.ctx.strokeStyle = "black";
    //     this.ctx.stroke();
    // }

    gameLoop(){
        // debugger
        this.drawBackground();
        // debugger
        this.player.draw();

        // Draw score
        this.drawScore();

        // debugger
        if (this.player.collision) {
            this.player.collision = false;
            // debugger
            // setTimeout(this.gameLoop.bind(this), 5000);
            // debugger
            setTimeout(this.restart.bind(this), 5000);

        } else {
            requestAnimationFrame(this.gameLoop.bind(this));
        }
    }


    restart(){
        this.obstacles = new Obstacles(this.ctx);
        this.player = new Player(this, this.obstacles, this.canvas, this.ctx);

        this.gameLoop();
    }
   

    drawBackground(){
        this.ctx.drawImage(this.img, 0, 0);
     }

    detectCollision(){
        // this.collision = false;
        this.obstacles.obstacles.forEach(obstacle => {
            if (obstacle.left <= this.canvas.width) {
                const playerLeft = this.player.position.x;
                const playerRight = playerLeft + this.player.width;
                const playerBottom = this.player.position.y + this.player.height;
                const that = this.player;
                    // this.eachObstacles(obstacle => { 
                    //     obstacle.velocity = 0;
                    // }) 
                    // debugger
                if ((playerBottom >= obstacle.y 
                        && playerRight >= obstacle.left 
                        && playerLeft <= obstacle.right)
                    || (playerBottom >= obstacle.y 
                        && obstacle.left <= playerRight
                        && playerLeft <= obstacle.right)
                    || (playerBottom >= obstacle.y 
                        && obstacle.right >= playerLeft
                        && playerRight >= obstacle.x)) {

                    // Stop all the obstacles
                    that.obstacles.obstacles.forEach((obstacle) => {
                        obstacle.velocity = 0;  
                    }) 
                    // Stop player from falling 
                    this.player.velocity.y = 0;
                    this.player.velocity.x = 0;
                    this.player.collision = true;
                    this.player.collisionCount += 1;
                } else {
                    this.player.score +=1 ;
                }
            } 
        })
    }

    drawScore() {
        // loc will be the location 
        const loc = {x: 380, y: this.canvas.height / 4}
        this.ctx.font = "bold 30pt serif";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(`${this.failCnt}`, loc.x, loc.y);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;
        this.ctx.fillText(`${3-this.failCnt}`, loc.x, loc.y+40);
    }
}


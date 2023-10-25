import Player from "./player";
import Obstacles from "./obstacles";

export default class Game {

    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        this.collisionCount = 0;
        this.gameover = false;

        this.img = new Image();

        this.obstacles = new Obstacles(this.ctx);
        this.player = new Player(this, this.obstacles, this.canvas, this.ctx);
// debugger

        this.img.src = './src/img/background.jpg';
        this.img.onload = () => {
            // debugger
            this.drawBackground();
            this.player.drawImage();
        }

        this.start = document.getElementById('start');
        this.start.addEventListener("click", () => {
            // debugger
            this.gameLoop();
            // Disable the button
            this.start.disabled = true;
        });

    }

    gameLoop(){
        // debugger
        this.drawBackground();

        // debugger
        this.player.animate();

        // Detect collision
        // debugger
        this.detectCollision();

        // Draw the score
        this.drawScore();

        // Gameover?
        this.gameOver();
    }


    gameOver(){
        if (this.player.collision && !this.gameover) {
            this.player.collision = false;
            setTimeout(this.restart.bind(this), 5000);
        } else {
            // debugger
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
                    if (this.collisionCount < 3) {
                        this.collisionCount += 1;
                    }
                    if (this.collisionCount >= 3) {
                        this.gameover = true;
                    }
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
        this.ctx.fillText(`${this.collisionCount}`, loc.x, loc.y);
        if (this.collisionCount >= 3) {
            this.ctx.font = "bold 50pt serif";
            this.ctx.strokeStyle = "black";
            this.ctx.lineWidth = 2;
            this.ctx.fillText(`Game Over`, loc.x-135, loc.y+60);
            this.start.disabled = false;
        }

    }
}


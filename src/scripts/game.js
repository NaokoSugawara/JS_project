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
        this.drawBackground();
        this.player.draw();

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

        console.log("bello!")
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

    // jump() {
    // }

    // animate(){

    //     requestAnimationFrame(this.animate);
    //     // this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);
    //     game.drawBaseline();
    //     game.drawCharactor();
    // }

}


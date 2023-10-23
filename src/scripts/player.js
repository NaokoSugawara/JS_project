
export default class Player {

    constructor(game, obstacles, canvas, ctx){
        this.game = game;
        this.obstacles = obstacles;
        this.canvas = canvas;
        this.ctx = ctx;
        this.position = {
            x: 330,
            // x: 250,
            // y: 400
            y: 300
        }
        this.velocity = {
            y: 0,
            x: 0
        }

        this.gravity = 1;

        this.width = 100;
        this.height = 100;

        this.img = new Image();
        this.img.src = './src/img/hashiru_girl.png';

        this.addEventHandlers();

    }

    // Update velocity
    addEventHandlers() {
        document.addEventListener("keydown", (e) => {
            // console.log(e);
            if (e.code === "ArrowLeft") {
                this.velocity.x = -3;
            } else if (e.code === "ArrowRight") {
                this.velocity.x = 3;
            }

            if (e.code === "ArrowUp") {
                this.velocity.y = -15;
            }
        })

        // Stop movement
        document.addEventListener("keyup", (e) => {
            // console.log(e);
            if (e.code === "ArrowLeft") {
                this.velocity.x = 0;
            } else if (e.code === "ArrowRight") {
                this.velocity.x = 0;
            }
        })
    }

    animate() { 
// debugger
        // It keeps falling unless the players bottom reaches to the bottom 
        if (this.position.y + this.height + this.velocity.y < this.canvas.height - 140) {
            this.velocity.y += this.gravity;
        } else {
            // Once the player reaches at the bottom, it'll stop falling
            this.velocity.y = 0;
        }
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

    }

    drawPlayer() {
        // // Draw the square
        // this.ctx.fillStyle = 'green';
        // this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        // debugger
        this.ctx.drawImage(this.img, this.position.x, this.position.y);
    }

    draw() {
        // Clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw background
        this.game.drawBackground();

        // Update player's position
        this.animate(); 

        // Draw obstacles;
        this.obstacles.animate();

        // Detect collision
        // debugger
        // this.detectCollision();
        
        // Draw player
        this.drawPlayer();
    }

      
    detectCollision(){
// debugger
        this.obstacles.obstacles.forEach(obstacle => {
            const playerLeft = this.position.x;
            const playerRight = playerLeft + this.width;
            const playerBottom = this.position.y + this.height;
            const that = this;
                // this.eachObstacles(obstacle => { 
                //     obstacle.velocity = 0;
                // }) 
                // debugger
            if ((playerBottom >= obstacle.y 
                && playerLeft <= obstacle.right 
                && playerRight >= obstacle.left)) {
                that.obstacles.obstacles.forEach((obstacle) => {
                    obstacle.velocity = 0;  
                }) 
                // Sopt player from falling
                debugger
                this.position.y = obstacle.y - this.height;
                console.log("bello2")

            } else if ((playerBottom >= obstacle.y && obstacle.left <= playerRight)) {
                that.obstacles.obstacles.forEach((obstacle) => {
                    obstacle.velocity = 0;  
                }) 
                console.log("bello1")
            } 
        })
    }


}
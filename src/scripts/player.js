
export default class Player {

    constructor(game, obstacles, canvas, ctx){
        this.game = game;
        this.obstacles = obstacles;
        this.canvas = canvas;
        this.ctx = ctx;
        this.position = {
            x: 330,
            y: 100
            // y: 100
        }
        this.velocity = {
            y: 0,
            x: 0
        }

        this.gravity = 1;

        this.width = 80;
        this.height = 90;

        this.img = new Image();
        // this.img.src = './src/img/running1.png'
        this.frame = 1;
        // this.gameFrame = 0;
        // this.staggerFrames = 10;

        // this.img.onload = () => {
        //     this.width = this.img.width;
        //     // let aspectRatio = this.img.widht / this.img.height;
        //     // this.height = 200;
        //     // this.width = this.height * aspectRatio;
        // }

        this.collision = false;
        this.collisionCount = 0;

        this.score = 0;
        
        this.addEventHandlers();

        this.delta = 25;
        this.oldTime = 0;

        this.img.src = `./src/img/running${this.frame}.png`;

        // Draw background
        // this.game.drawBackground();


    }

    // Update velocity
    addEventHandlers() {
        // debugger
        document.addEventListener("keydown", (e) => {
// debugger
            if (e.code === "ArrowLeft") {
                // this.img.src = `./src/img/running${this.frame}.png`;

                // debugger;
                this.velocity.x = -3;
                // debugger;
            } else if (e.code === "ArrowRight") {
                // this.img.src = `./src/img/running${this.frame}.png`;

                this.velocity.x = 3;
            }

            if (e.code === "ArrowUp") {
                this.img.src = `./src/img/jump_up.png`;
                this.oldTime = -30;

                this.velocity.y = -15;
                // debugger;

            }
        })

        // Stop movement
        document.addEventListener("keyup", (e) => {

            if (e.code === "ArrowLeft") {
                this.velocity.x = 0;
            } else if (e.code === "ArrowRight") {
                this.velocity.x = 0;
            }
        })
    }

    animate() { 
        // debugger;
// debugger
        // console.log(this.position);
        // console.log(this.velocity);
        // It keeps falling unless the players bottom reaches to the bottom 
        // console.log("sum", this.position.y + this.height + this.velocity.y);
        // console.log("canvas height", this.canvas.height - 175)
        if (!this.collision && this.position.y + this.height + this.velocity.y < this.canvas.height - 140) {
            // debugger;
            this.velocity.y += this.gravity;
        } else {
            // Once the player reaches to the bottom, it'll stop falling
            this.velocity.y = 0;
        }
        // console.log(this.velocity);
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

    }

    drawPlayer() {
        // // Draw the square
        // this.ctx.fillStyle = 'green';
        // this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);


        // this.imgSources.forEach(imgSrc => {
        //     this.img.src = imgSrc;
        //     this.ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
        // })
// debugger
        // if (this.gameFrame % this.staggerFrames === 0){

        // Delta回数分、同じ映像を繰り返し表示する
        if (!this.collision) {
            if (this.oldTime === 0) {
                this.img.src = `./src/img/running${this.frame}.png`;
    
                // debugger;
                this.frame = (this.frame + 1) % 4 || 4;
    
            } else if (this.oldTime > this.delta) {
                this.oldTime = -1;
            } 
            this.oldTime += 1;
        }
        this.ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);



    }

    draw() {
        // Clear the canvas
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        
        // Update player's positio

        // Draw obstacles;
        this.obstacles.animate();

        // Detect collision
        // debugger
        this.detectCollision();
        
        // Draw player
        this.drawPlayer();

        this.animate(); 

         // Draw the score
        // this.drawScore();
    }

      
    detectCollision(){
        // this.collision = false;
        this.obstacles.obstacles.forEach(obstacle => {
            if (obstacle.left <= this.canvas.width) {
                const playerLeft = this.position.x;
                const playerRight = playerLeft + this.width;
                const playerBottom = this.position.y + this.height;
                const that = this;
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
                    this.velocity.y = 0;
                    this.velocity.x = 0;
                    this.collision = true;
                    this.collisionCount += 1;
                } else {
                    this.score +=1 ;
                }
            } 
        })
    }

        
    drawScore() {
        // loc will be the location 
        const loc = {x: this.canvas.width / 2, y: this.canvas.height / 4}
        this.ctx.font = "bold 50pt serif";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(this.score, loc.x, loc.y);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;
        this.ctx.strokeText(this.score, loc.x, loc.y);
    }
}
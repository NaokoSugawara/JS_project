
export default class Player {

    constructor(game, obstacles, canvas, ctx){
        this.game = game;
        this.obstacles = obstacles;
        this.canvas = canvas;
        this.ctx = ctx;
        this.position = {
            x: 330,
            y: 350
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
        this.frame = 1;
        this.img.src = `./src/img/running${this.frame}.png`;

        this.collision = false;

        this.addEventHandlers();

        this.delta = 25;
        this.oldTime = 0;

    }

    // Update velocity
    addEventHandlers() {

        document.addEventListener("keydown", (e) => {

            if (e.code === "ArrowLeft") {
                // this.img.src = `./src/img/running${this.frame}.png`;

                this.velocity.x = -3;
            } else if (e.code === "ArrowRight") {
                // this.img.src = `./src/img/running${this.frame}.png`;

                this.velocity.x = 3;
            }
            if (e.code === "ArrowUp") {
                this.img.src = `./src/img/jump_up.png`;
                this.oldTime = -30;
                this.velocity.y = -15;
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


    movePlayer() { 

        // It keeps falling unless the players bottom reaches to the bottom 
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

        // Delta回数分、同じ映像を繰り返し表示する
        // If collides, no update for the charactor movement
        // debugger
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
        // debugger
        this.drawImage()
    }


    drawImage(){
        this.ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }


    animate() {
        // Draw player
        this.drawPlayer();

        // Update position
        this.movePlayer(); 

        // Draw obstacles;
        this.obstacles.animate(this.collision);
    }


}
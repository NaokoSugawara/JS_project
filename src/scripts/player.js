
export default class Player {

    constructor(game, canvas, ctx, x, y){
        this.game = game;
        this.canvas = canvas;
        this.ctx = ctx;
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            y: 0,
            x: 0
        }

        this.gravity = 1;

        this.width = 100;
        this.height = 100;

        this.addEventHandlers();

    }

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

        // stop movement
        document.addEventListener("keyup", (e) => {
            // console.log(e);
            if (e.code === "ArrowLeft") {
                this.velocity.x = 0;
            } else if (e.code === "ArrowRight") {
                this.velocity.x = 0;
            }
        })
    }

    animate() { // 位置を決めている
        
// debugger
        // if (this.position.y > this.canvas.height - this.height - this.velocity.y - 100) {
        //     // debugger;
        //     this.velocity.y = 0;
        // }
        if (this.position.y + this.height + this.velocity.y + 100 < this.canvas.height) {
            this.velocity.y += this.gravity;
        } else {
            this.velocity.y = 0;
        }
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        // console.log(this.velocity.y);
        // console.log(this.canvas.height);
        // console.log(this.position.y);
        // console.log(this.position.y + this.height + this.velocity.y);
        

    }

    drawPlayer() {
        // Draw the square
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    draw() {
        // Clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.game.drawBackground();
        // debugger
        this.animate();


        // Draw the square
        this.drawPlayer();

        // Request the next frame
        // debugger
       
    }


}
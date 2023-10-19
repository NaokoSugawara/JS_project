
// const square = {
//     width: 30,
//     height: 30,
//     jumpHeight: 100,
//     // jumping: true,
//     jumpingUp: true,
//     jumpStartY: 0,
//     jumpSpeed: 20,
//     verocity: 0
// };

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
        this.velocity.y += this.gravity;

        if (this.position.y > this.canvas.height - this.height - this.velocity.y - 100) {
            // debugger;
            this.velocity.y = 0;
        }
        this.position.x += this.velocity.x;
        console.log(this.velocity.y);
        console.log(this.position.y);
        this.position.y += this.velocity.y;
    }

    drawPlayer() {
        // Draw the square
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    draw() {
        // Clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.animate();


        // Draw the square
        this.drawPlayer();

        // Request the next frame
        // debugger
       
    }


}
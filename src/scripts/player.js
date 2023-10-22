
export default class Player {

    constructor(game, obstacles, canvas, ctx, x, y){
        this.game = game;
        this.obstacles = obstacles;
        this.canvas = canvas;
        this.ctx = ctx;
        this.position = {
            x: 330,
            y: 400
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

        if (this.position.y + this.height + this.velocity.y + 100 < this.canvas.height) {
            this.velocity.y += this.gravity;
        } else {
            this.velocity.y = 0;
        }
        this.position.x += this.velocity.x;
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

        // Draw background
        this.game.drawBackground();
        this.animate();

        // Draw obstacles;
        this.obstacles.animate();

        // Draw player
        this.drawPlayer();

       
    }


}
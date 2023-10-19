
const square = {
    width: 30,
    height: 30,
    jumpHeight: 100,
    jumping: true,
    jumpStartY: 0,
    jumpSpeed: 5,
    verocity: 0
};

export default class Player {

    constructor(game, canvas, ctx, x, y){
        this.game = game;
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
    }

    // Update and draw the square
    update() {
        if (square.jumping) {
                this.y -= square.jumpSpeed;
                if (this.y <= square.jumpStartY - square.jumpHeight) {
                square.jumping = false;
                debugger;
            }
        } else {
            // debugger;
                // this.y += square.jumpSpeed;
                if (this.y > this.canvas.height - square.height) {
                    this.y = this.canvas.height - square.height;
            }
        }
    }

    drawSquare() {
        // Draw the square
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.x, this.y, square.width, square.height);
    }

    draw() {
        // Clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw baseline
        this.game.drawBaseline();

        // Draw the square
        this.drawSquare();

        // Request the next frame
        debugger
        requestAnimationFrame(this.game.gameLoop.bind(this.game));
    }


}
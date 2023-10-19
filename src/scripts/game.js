

const square = {
    width: 30,
    height: 30,
    jumpHeight: 100,
    jumping: false,
    jumpStartY: 0,
    jumpSpeed: 5,
};


export default class Game {

    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.x = 50; // initial x position
        this.y = canvas.height-200; // Initial Y position
        // this.x = this.canvas.width / 3;
        // this.y = this.canvas.height / 2;
        this.vel = 0;
        
        // this.obstacles = new Obstacles(this.dimensions);

    }

    drawBaseline(){
        this.ctx.beginPath();
        this.ctx.moveTo(50, 500);
        this.ctx.lineTo(750, 500);
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
    }

    // drawCharactor(){
    //     this.ctx.fillStyle = "purple";
    //     // ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);
    //     this.ctx.fillRect(100, 450, 50, 50 );
    // }


    // Update and draw the square
    update() {
        // debugger
        if (square.jumping) {
                this.y -= square.jumpSpeed;
                if (this.y <= square.jumpStartY - square.jumpHeight) {
                square.jumping = false;
            }
        } else {
                square.y += square.jumpSpeed;
                if (this.y > this.canvas.height - square.height) {
                    this.y = this.canvas.height - square.height;
            }
        }
    }

    draw() {
        // Clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw baseline
        this.drawBaseline();

        // Draw the square
        // debugger
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(this.x, this.y, square.width, square.height);

        // Request the next frame
        requestAnimationFrame(gameLoop);
    }

    gameLoop(){
        this.update();
        this.draw();
    }

    // Start the game loop
   





    // jump() {
    // }

    // animate(){

    //     requestAnimationFrame(this.animate);
    //     // this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);
    //     game.drawBaseline();
    //     game.drawCharactor();
    // }

}


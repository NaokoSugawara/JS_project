
export default class Obstacles {
    constructor(ctx){
        this.ctx = ctx;
        this.position = {
            x: 700,
            y: 450
        }
        this.velocity = 2;

        this.obstacles = [];

        for (let i=0; i<3; i++) {
            const randomDistance =  Math.floor(Math.random() * 1000) + 700;
            this.obstacles.push(this.generateObstacle(randomDistance));
        }
    }

    
    generateObstacle(x) {
        const obstacle = {
            left: x, 
            right: 50 + x, 
        };
        return obstacle;
    }

    moveObstacles() {
        this.eachObstacles (function(obstacle) {
            obstacle.left -= this.velocity
            obstacle.right -= this.velocity
        });
    // debugger
        // If a obstacles has left the screen, add a new one to the end.
        if (this.obstacles[0].right <= 0) {
            this.obstacles.shift();
            const newX = this.obstacles[1].left;
            this.obstacles.push(this.generateObstacle(newX));
        }
    }

    drawObstacles(ctx){
        // debugger
        this.eachObstacles(function(obstacle) {
            ctx.fillStyle = "red";
            // debugger
            ctx.fillRect(
                obstacle.left, 
                450, 
                50, 
                50
            );
        });
    }

    animate() {
        this.moveObstacles();
        this.drawObstacles(this.ctx);
    }

    eachObstacles(callback) {
        this.obstacles.forEach(callback.bind(this));
      }
}

export default class Obstacles {
    constructor(ctx){
        this.ctx = ctx;
        this.position = {
            x: 700,
            y: 450
        }
        this.velocity = 1;

        this.obstacles = [
            this.generateObstacle(50),
            this.generateObstacle(100),
            this.generateObstacle(150),
            // this.randomObstacles(firstPipeDistance + CONSTANTS.PIPE_SPACING),
            // this.randomObstacles(firstPipeDistance + (CONSTANTS.PIPE_SPACING * 2)),
          ];
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
            ctx.fillRect(
                obstacle.left, 
                obstacle.right, 
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
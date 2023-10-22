
export default class Obstacles {
    constructor(ctx){
        this.ctx = ctx;
        this.position = {
            x: 700,
            y: 450
        }
        this.velocity = 2;
        const spaceBetObstacles = 150;
        this.firstObsDistance = Math.floor(Math.random() * 1000) + 700;
        const randomNum1 = Math.floor(Math.random() * 300) + 100;
        const randomNum2 = Math.floor(Math.random() * 300) + 100;
  
        this.obstacles = [
        this.generateObstacle(this.firstObsDistance),
        this.generateObstacle(this.firstObsDistance + spaceBetObstacles + randomNum1),
        this.generateObstacle(this.firstObsDistance + (spaceBetObstacles * 2) + randomNum2)
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
            const randomNum = Math.floor(Math.random() * 300) + 100;
            const x = this.firstObsDistance + randomNum;
            this.obstacles.push(this.generateObstacle(x));
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
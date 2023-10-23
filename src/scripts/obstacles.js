
export default class Obstacles {
    constructor(ctx){
        this.ctx = ctx;
        // this.position = {
        //     x: 700,
        //     y: 450
        // }

        const spaceBetObstacles = 150;
        this.firstObsDistance = Math.floor(Math.random() * 800) + 400;
        const randomNum1 = Math.floor(Math.random() * 800) + 300;
        const randomNum2 = Math.floor(Math.random() * 800) + 300;

        this.obstacles = [
            this.generateObstacle(this.firstObsDistance),
            // this.generateObstacle(450),
            this.generateObstacle(this.firstObsDistance + spaceBetObstacles + randomNum1),
            this.generateObstacle(this.firstObsDistance + (spaceBetObstacles * 3) + randomNum2)
        ];
    }

    
    generateObstacle(x) {
        const obstacle = {
            left: x, 
            right: 50 + x, 
            y: 450,
            velocity: 2
        };
        return obstacle;
    }

    moveObstacles() {
        this.eachObstacles (function(obstacle) {
            obstacle.left -= obstacle.velocity
            obstacle.right -= obstacle.velocity
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
                obstacle.y, 
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
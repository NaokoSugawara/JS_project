
export default class Obstacles {
    constructor(ctx){
        this.ctx = ctx;
        // this.position = {
        //     x: 700,
        //     y: 450
        // }

        const spaceBetObstacles = 150;
        this.firstObsDistance = Math.floor(Math.random() * 800) + 600;
        const randomNum1 = Math.floor(Math.random() * 800) + 300;
        const randomNum2 = Math.floor(Math.random() * 800) + 300;

        this.obstacles = [
            this.generateObstacle(this.firstObsDistance),
            // this.generateObstacle(350),
            this.generateObstacle(this.firstObsDistance + spaceBetObstacles + randomNum1),
            this.generateObstacle(this.firstObsDistance + (spaceBetObstacles * 3) + randomNum2)
        ];

        this.img = new Image();
        // this.img.src = './src/img/120Tyrannosaurus_hair.png';
        // 3172 x 2832px => 480w x 429h
        this.img.src = './src/img/AdobeStock_551762638.png'; 
        this.spriteWidth = 480 / 4;
        this.spriteHeight = 429 / 4;
    // }
    }

    
    generateObstacle(x) {
        const obstacle = {
            left: x, 
            right: 50 + x, 
            y: 350,
            velocity: 2,
            frameX: 0,
            frameY: 3
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

    drawObstacles(ctx, collision){
        // debugger
        this.eachObstacles(obstacle => {
        // const obstacle = this.obstacles[0];
            // ctx.fillStyle = "red";
            // // debugger
            // ctx.fillRect(
            //     obstacle.left, 
            //     obstacle.y, 
            //     50, 
            //     50
            // );
// debugger
            ctx.drawImage(this.img, obstacle.frameX * this.spriteWidth, obstacle.frameY * this.spriteHeight, 
                this.spriteWidth, this.spriteHeight, obstacle.left, obstacle.y, this.spriteWidth, this.spriteHeight);
            if (!collision) {
                if (obstacle.frameX < 3) obstacle.frameX++;
                else obstacle.frameX = 0;
            }
        })
        
    }

    animate(collision) {
        this.moveObstacles();
        this.drawObstacles(this.ctx, collision);
    }

    eachObstacles(callback) {
        this.obstacles.forEach(callback.bind(this));
    }




}
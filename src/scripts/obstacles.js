
class Obstacles {
    constructor(dimensions){
        this.dimensions = dimensions;
    }

    drawBackground(ctx){
        ctx.fillstyle = 'green';
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }
}
import Component from "../../engine/component.js"
class DrawTriComponent extends Component{
    static name = "DrawTriComponent"
    constructor(gameObject, color, sideLength){
        super(gameObject);
        this.color = color;
        if (sideLength)
            this.length = sideLength;
        else 
            this.length = 100;
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        let h = this.length * (Math.sqrt(3)/2);
        ctx.save()
        ctx.translate(this.gameObject.x, this.gameObject.y);
        ctx.beginPath()
        ctx.moveTo(0, -h / 2);
        ctx.lineTo( -this.length / 2, h / 2);
        ctx.lineTo(this.length / 2, h / 2);
        ctx.lineTo(0, -h / 2);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
}

export default DrawTriComponent;
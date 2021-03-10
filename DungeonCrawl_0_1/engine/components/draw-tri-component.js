import Component from "../component.js"
class DrawTriComponent extends Component {
    static name = "DrawTriComponent"
    constructor(gameObject, color, sideLength = 100) {
        super(gameObject);
        this.color = color;
        this.length = sideLength;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        let h = this.length * (Math.sqrt(3) / 2);
        ctx.save()
        ctx.translate(this.gameObject.x, this.gameObject.y);
        ctx.beginPath()
        ctx.moveTo(0, -h / 2);
        ctx.lineTo(-this.length / 2, h / 2);
        ctx.lineTo(this.length / 2, h / 2);
        ctx.lineTo(0, -h / 2);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
}

export default DrawTriComponent;
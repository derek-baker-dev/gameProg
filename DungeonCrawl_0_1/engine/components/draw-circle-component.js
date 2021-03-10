import Component from "../component.js"
class DrawCircComponent extends Component{
    static name = "DrawCircComponent"
    constructor(gameObject, color, radius = 100){
        super(gameObject);
        this.color = color;
        this.radius = radius;
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.gameObject.x, this.gameObject.y, this.radius, 0, 2 * Math.PI, false)
        ctx.fill();
        ctx.closePath();
    }
}

export default DrawCircComponent;
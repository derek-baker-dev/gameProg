import Component from "../../engine/component.js"
class DrawCircComponent extends Component{
    static name = "DrawCircComponent"
    constructor(gameObject, color, radius){
        super(gameObject);
        this.color = color;
        if (radius)
            this.radius = radius;
        else
            this.radius = 100;
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
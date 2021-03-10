import Component from "../component.js"
class DrawComponent extends Component {
    static name = "DrawRecComponent"
    constructor(gameObject, color, height = 200, width = 100) {
        super(gameObject);
        this.color = color;
        this.width = width
        this.height = height
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.gameObject.x, this.gameObject.y, this.width, this.height);//fillRect expects the upper left-hand coordinates and then the width and height of the rectangle

    }
}

export default DrawComponent;
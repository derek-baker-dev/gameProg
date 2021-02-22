import Component from "../../engine/component.js"
class DrawComponent extends Component {
    static name = "DrawComponent"
    constructor(gameObject, color, height, width) {
        super(gameObject);
        this.color = color;
        if (width) {
            this.width = width
        }
        else
            this.width = 100

        if (height) {
            this.height = height
        }
        else
            this.height = 200
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.gameObject.x, this.gameObject.y, this.width, this.height);//fillRect expects the upper left-hand coordinates and then the width and height of the rectangle

    }
}

export default DrawComponent;
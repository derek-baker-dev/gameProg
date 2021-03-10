import Component from "../component.js"
class ScreenTextComponent extends Component{
    static name = "ScreenTextComponent"
    constructor(gameObject, string, options){
        super(gameObject);

        this.string = string;
        
        this.color = options?.color || "red";
        this.font = options?.font || "32pt arial";
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.font = this.font;
        ctx.fillText(this.string, this.gameObject.x, this.gameObject.y);
        
    }
}

export default ScreenTextComponent;
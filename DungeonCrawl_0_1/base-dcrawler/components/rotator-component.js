import Component from "../../engine/component.js"
import Input from "../../engine/input.js"

export default class RotatorComponent extends Component {
    constructor(gameObject) {
        super(gameObject);
        this.rotation = 0;
    }
    /*onKeyDown(keys) {
        if (keys["a"] || keys["ArrowLeft"]) this.rotation = -Math.PI / 2
        if (keys["d"] || keys["ArrowRight"]) this.rotation = Math.PI / 2
        if (keys["w"] || keys["ArrowUp"]) this.rotation = -Math.PI 
        if (keys["s"] || keys["ArrowDown"]) this.rotation = Math.PI 
    }*/
    update()
    {
        this.rotation ++
    }
}
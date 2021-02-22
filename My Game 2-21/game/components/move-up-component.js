import Component from "../../engine/component.js"

class MoveUpComponent extends Component{
    static name = "MoveComponent"
    constructor(gameObject){
        super(gameObject);
    }
    update(){
        this.gameObject.y--;
    }
}

export default MoveUpComponent;
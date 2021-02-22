import Component from "../../engine/component.js"

class MoveRightComponent extends Component{
    static name = "MoveComponent"
    constructor(gameObject){
        super(gameObject);
    }
    update(){
        this.gameObject.x++;
    }
}

export default MoveRightComponent;
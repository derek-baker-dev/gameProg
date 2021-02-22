import Component from "../../engine/component.js"

class MoveDownComponent extends Component{
    static name = "MoveComponent"
    constructor(gameObject){
        super(gameObject);
    }
    update(){
        this.gameObject.y++;
    }
}

export default MoveDownComponent;
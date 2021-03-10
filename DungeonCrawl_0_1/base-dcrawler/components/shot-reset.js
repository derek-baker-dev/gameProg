import Component from "../../engine/component.js"
import Input from "../../engine/input.js"
import SceneManager from "../../engine/scene-manager.js";

export default class ShotReset extends Component {
    static name = "ShotReset";
    constructor(gameObject) {
        super(gameObject);
        this.tick = 0;
    }

    update() {
        if (!SceneManager.currentScene.getGameObject("RedShot")) {
            this.tick++;
        }
        if (this.tick > 0)
        {
            console.log("Reset")
            this.tick = 0
            SceneManager.currentScene.instantiate({
                prefabName: "RedShot"
            })
        }
    }
}
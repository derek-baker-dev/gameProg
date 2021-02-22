import Component from "../../engine/component.js"
import SceneManager from "../../engine/scene-manager.js"

class ChangeSceneComponent extends Component {
  static name = "ChangeSceneComponent";
  constructor(gameObject) {
    super(gameObject);
    this.ticks = 0;
  }
  update() {
    this.ticks++;
    if (this.ticks > 100) {
      if (SceneManager.currentScene.name == "FirstScene")
        SceneManager.changeScene("SecondScene");
      else SceneManager.changeScene("FirstScene")
    }
  }

}

export default ChangeSceneComponent;
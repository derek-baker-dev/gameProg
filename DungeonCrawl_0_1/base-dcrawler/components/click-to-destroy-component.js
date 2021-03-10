import Component from "../../engine/component.js"
import Input from "../../engine/input.js"
import SceneManager from "../../engine/scene-manager.js";

class ClickToDestroyComponent extends Component {
  static name = "ClickToDestroyComponent";
  constructor(gameObject, speed = 1) {
    super(gameObject);
    this.speed = speed;

  }
  start() {
    console.log("You called start() on a ClickToDestroyComponent")
  }
  update() {
    let sceneChg = SceneManager.currentScene.getGameObject("Controller").getComponent("SceneChangerComponent")
    if (Input.getMouseButtonDown(0)) {
      let mousePosition = Input.getMousePosition();
      if (mousePosition.x < 400 && mousePosition.x > 200 && mousePosition.y < 300) {
        SceneManager.currentScene.getGameObject("CRHero").destroy();
        SceneManager.currentScene.getGameObject("TRHero").destroy();
        sceneChg.select("CT")
      }
      else if (mousePosition.x < 550 && mousePosition.x > 400 && mousePosition.y < 300) {
        SceneManager.currentScene.getGameObject("CTHero").destroy();
        SceneManager.currentScene.getGameObject("TRHero").destroy();
        sceneChg.select("CR")
      }
      else if (mousePosition.x < 300 && mousePosition.y < 300) {
        SceneManager.currentScene.getGameObject("CTHero").destroy();
        SceneManager.currentScene.getGameObject("CRHero").destroy();
        sceneChg.select("TR")
      }
    }
  }
}

export default ClickToDestroyComponent;
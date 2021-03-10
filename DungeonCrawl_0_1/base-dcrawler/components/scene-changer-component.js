import Component from "../../engine/component.js"
import SceneManager from "../../engine/scene-manager.js"

export default class SceneChangerComponent extends Component {
  static name = "SceneChangerComponent";
  constructor(gameObject) {
    super(gameObject);
    this.tick = 0;
    this.hasWon = false;
    this.haslost = false;
  }
  update() {
    if (this.hasWon || this.hasLost) {
      this.tick++;
      if (this.tick > 50) {
        if (this.hasWon) SceneManager.changeScene("WinScene");
        else SceneManager.changeScene("LoseScene")
      }
    }
  }
  next() {
    let currentSceneName = SceneManager.currentScene.name;
    if (currentSceneName == "TitleScene") SceneManager.changeScene("MainScene");
    else SceneManager.changeScene("TitleScene")
  }
  select(choice) {
    let currentSceneName = SceneManager.currentScene.name;
    if (currentSceneName == "TitleScene") {
      switch (choice) {
        case "CT":
          SceneManager.changeScene("MainSceneCT")
          break;
        case "CR":
          SceneManager.changeScene("MainSceneCR")
          break;
        case "TR":
          SceneManager.changeScene("MainSceneTR")
          break;
      }
    }
  }
  win() {
    this.hasWon = true;
  }
  lose() {
    this.hasLost = true;
  }
}
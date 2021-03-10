import Component from "../../engine/component.js"
import SceneManager from "../../engine/scene-manager.js"

export default class MainControllerComponent extends Component {
  constructor(gameObject) {
    super(gameObject);
  }
  start() {
    //console.log(SceneManager.currentScene)
    //this.hero = SceneManager.currentScene.getGameObject("CTHero");
  }
   update() {
    let currentSceneName = SceneManager.currentScene.name;
    this.heroType = ""
    if (currentSceneName.includes("CT")) this.heroType = "CT"
    if (currentSceneName.includes("CR")) this.heroType = "CR"
    if (currentSceneName.includes("TR")) this.heroType = "TR"
    this.hero = SceneManager.currentScene.getGameObject(this.heroType + "Hero");
    this.heroX = this.hero.x;
    this.heroY = this.hero.y;
    if(this.heroX < 20){
      //Move left
      if(currentSceneName == "MainScene" + this.heroType) return SceneManager.changeScene("OrangeScene" + this.heroType)
      this.hero.x = 20;
    }
    if(this.heroX > 765){
      //Move right
      if(currentSceneName == "OrangeScene" + this.heroType) return SceneManager.changeScene("MainScene" + this.heroType)
      this.hero.x = 765
    }
    if(this.heroY < 100){
      //Move up
      if (currentSceneName == "OrangeScene" + this.heroType) return SceneManager.changeScene("RedScene" + this.heroType)
      this.hero.y = 100;
    }
    if(this.heroY > 800){
      //Move Down
      if (currentSceneName == "RedScene" + this.heroType) return SceneManager.changeScene("OrangeScene" + this.heroType)
      this.hero.y = 800
    }
  }
  
}
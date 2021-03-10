import Component from "../../engine/component.js"

export default  class TitleSceneCountdownComponent extends Component {
  static name = "TitleCountdown"
  constructor(gameObject, duration = 300) {
    super(gameObject);
    this.tick = 0;
    this.duration = duration;
  }
  update(){
    this.tick++;
    if(this.tick > this.duration)
      this.gameObject.getComponent("SceneChangerComponent").next();
  }
}
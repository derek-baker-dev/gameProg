import Component from "../../engine/component.js"
import Input from "../../engine/input.js"

class LastDirection extends Component {
  static name = "LastDirection";
  constructor(gameObject) {
    super(gameObject);
    this.direction = "up"

  }

  onKeyDown(keys) {
    if (keys["a"] || keys["ArrowLeft"]) {
      this.direction = "left"
    }
    if (keys["d"] || keys["ArrowRight"]) {
      this.direction = "right"
    }
    if (keys["w"] || keys["ArrowUp"]) {
      this.direction = "up"
    }
    if (keys["s"] || keys["ArrowDown"]) {
      this.direction = "down"
    }
  }
}

export default LastDirection;
import Component from "../../engine/component.js"
import Input from "../../engine/input.js"
import SceneManager from "../../engine/scene-manager.js";

export default class ShootBall extends Component {
    static name = "ShootBall"
    constructor(gameObject, color, speed = 10) {
        super(gameObject);
        this.speed = speed
        this.color = color
        this.flag = 0
        this.tick = 0
    }
    onKeyDown(keys) {
        if (keys[" "]) {
            console.log(this.heroT)
            this.heroCT = SceneManager.currentScene.getGameObject("CTHero")
            this.heroCR = SceneManager.currentScene.getGameObject("CRHero")
            this.heroTR = SceneManager.currentScene.getGameObject("TRHero")
            if (this.heroCT)
            {
                this.hero = SceneManager.currentScene.getGameObject("CTHero")
            }
            else if (this.heroCR)
            {
                this.hero = SceneManager.currentScene.getGameObject("CRHero")
            }
            else if (this.heroTR)
            {
                this.hero = SceneManager.currentScene.getGameObject("TRHero")
            }
            if (!this.flag) {
                this.lDir = SceneManager.currentScene.getGameObject("Controller").getComponent("LastDirection").direction
                this.hX = this.hero.x
                this.hY = this.hero.y
            }
            this.flag = 1
        }
    }

    draw(ctx) {
        if (this.flag) {
            //console.log("In")
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.hX, this.hY, 20, 0, 2 * Math.PI, false)
            ctx.fill();
            ctx.closePath();
        }
    }

    update() {
        if (this.flag) {
            switch (this.lDir) {
                case "up":
                    this.hY -= 1 * this.speed;
                    break;
                case "down":
                    this.hY += 1 * this.speed;
                    break;
                case "left":
                    this.hX -= 1 * this.speed;
                    break;
                case "right":
                    this.hX += 1 * this.speed;
                    break;
            }
            this.tick++
            if (this.tick > 50) {
                if (SceneManager.currentScene.getGameObject("RedShot")) {
                    SceneManager.currentScene.getGameObject("RedShot").destroy()
                    this.flag = 0
                }
            }
        }
    }
}
import SceneManager from "../engine/scene-manager.js"
import * as GameScenes from "./scenes/game-scenes.js"
import * as GamePrefabs from "./prefabs/game-prefabs.js"
import * as EngineComponents from "../engine/components/engine-components.js"
import * as GameComponents from "./components/game-components.js"
import Input from "../engine/input.js"

function boot(sceneName) {

  /* Setup our canvas */
  let canvas = document.getElementById("canv");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight
  let ctx = canvas.getContext("2d");

  //Add event listeners to the page
  Input.attach(document);

  SceneManager.allComponents = [...Object.keys(EngineComponents).map(i => EngineComponents[i]), ...Object.keys(GameComponents).map(i => GameComponents[i])];
  SceneManager.allPrefabs = Object.keys(GamePrefabs).map(i => GamePrefabs[i]);
  SceneManager.allScenes = Object.keys(GameScenes).map(i=>GameScenes[i]);
  SceneManager.changeScene(sceneName);

  /* Update and draw our game */
  function gameLoop() {
    clear();
    Input.SwapArrays();
    let currentScene = SceneManager.currentScene;
    currentScene.draw(ctx);
    currentScene.update();
    currentScene.cullDestroyed();
  }

  /* Erase what we had on the last frame */
  function clear() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  setInterval(gameLoop, 1000 / 144)
}

export default boot;
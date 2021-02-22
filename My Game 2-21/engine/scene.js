import GameObject from "./game-object.js"
import SceneManager from "./scene-manager.js"

class Scene {


    constructor() {
        this.children = [];
    }

    static deserializeObject(objectDefinition) {
        let gameObject;
        let gameObjectDefinition;
        if (objectDefinition.prefabName) {//It's a prefab
            gameObjectDefinition = SceneManager.allPrefabs.find(i => i.name == objectDefinition.prefabName);
            gameObjectDefinition.children = objectDefinition.children;
        }
        else //It's a one-off game object 
            gameObjectDefinition = objectDefinition.gameObject;


        gameObject = GameObject.deserialize(gameObjectDefinition); //Deserialize the object
        gameObject.x = objectDefinition.x || 0; //Set the x or default to 0. This is already the default, so this is redundant but very clear
        gameObject.y = objectDefinition.y || 0; //Set the y or default to 0
        return gameObject
    }

    static deserialize(sceneDefinition) {
        let toReturn = new Scene(); //Create a new Scene
        toReturn.name = sceneDefinition.name; //Set the scene's name (for reference later when we are changing scenes)
        for (let objectDefinition of sceneDefinition.children) { //Loop over all the children.
            let gameObject = this.deserializeObject(objectDefinition)
            toReturn.children.push(gameObject);
        }
        return toReturn;

    }

    /**
     * Return a reference to the children in this scene
     * @return {Array} the array of child GameObjects
     */
    getChildren() {
        return this.children;
    }

    /**
     * 
     * @param {GameObject} child the GameObject child to add to the scene
     */
    addChild(child) {
        this.children.push(child)
    }

    /**
     * 
     * @param {2D Rendering Context from a Canvas} ctx the 2D context to which we draw
     */
    draw(ctx) {
        //Loop through all the game objects and render them.
        for (let i = 0; i < this.children.length; i++) {
            let child = this.children[i];
            child.draw(ctx);
        }
    }

    /**
     * Update all the Gamebjects
     */
    update() {
        //Use an extended for loop to call update on all gameObjects
        for (let child of this.children) {
            child.update();
        }
    }
}

export default Scene;
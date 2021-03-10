import Scene from "./scene.js"
import SceneManager from "./scene-manager.js"

/**
 * @class GameObject representing a game object in the scene
 */
class GameObject {

    static deserialize(gameObjectDefinition) { //Deserialize a game object definition
        let toReturn = new GameObject(); //Create a new Game Object
        toReturn.name = gameObjectDefinition.name; //Set the name (for later reference in the game)
        for (let componentDefinition of gameObjectDefinition.components) { //Loop over all the defined components
            let componentClass = SceneManager.allComponents.find(i => i.name == componentDefinition.name); //Find a component definition with the appropriate name
            let component = new componentClass(toReturn, ...componentDefinition.args || []); //Create a new component, speading the arguments and defaulting to nothing.
            toReturn.components.push(component);
        }
        if (gameObjectDefinition.children)
            for (let childDefinition of gameObjectDefinition.children) {
                let child = Scene.deserializeObject(childDefinition);
                toReturn.children.push(child);
            }
        return toReturn;
    }

    /**
     * Set the default values of x and y
     */
    constructor() {
        this.x = 0;
        this.y = 0;
        this.components = [];
        this.children = [];
        this.markedDestroy = false;

    }
    /**
     * Update the game by iterating over every game object and calling update if available.
     */
    update() {
        for (let component of this.components) {
            if (component.update) component.update();
        }
        for(let child of this.children){
            child.update();
        }
    }

    /**
     * Draw the game object
     * @param {2D Context from a Canvas} ctx where the game object is drawn
     */
    draw(ctx) {//How does the game object draw itself?
        for (let component of this.components) {
            if (component.draw) component.draw(ctx);
        }
        for(let child of this.children){
            child.draw(ctx);
        }
    }

    /**
     * Mark this game object for destroy
     */
    destroy(){
        this.markedDestroy = true;
    }

    /**
     * Get a game object by name
     */
    getGameObject(name){
        for(let child of this.children){
            if(child.name == name) return child;
            let foundChild = child.getGameObject(name);
            if(foundChild) return foundChild;
        }
        
    }

    /**
     * Find a component by name
     */
    getComponent(name){
        for(let component of this.components){
            if(component.constructor.name == name)
                return component;
        }
        //If we didn't find it, search any children we have
        for(let child of this.children){
            let component = child.getComponent(name);
            if(component) return component;
        }
    }

    /**
     * Call a method on this game object (if present) and all children
     */
    callMethod(name, args){
        for(let component of this.components){
            if(component[name])
                component[name](args);
        }
        for(let child of this.children){
            child.callMethod(name, args);
        }
    }
}

export default GameObject;
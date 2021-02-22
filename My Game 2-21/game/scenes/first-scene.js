export default {
  name: "FirstScene", //Scene name
  children:[ //Game objects in the scene
    {
      //If we have the "prefabName" key, then it's a prefab
      prefabName: "YellowCircle",
      x: 600, //Set the position of the game object instance
      y: 300
    },
    {
      //If we have the "gameObject" key, then it's a one-off game object definition
      gameObject: {
        name: "TealRectangle",
        components: [
          {
            name: "DrawComponent",
            args: ["purple", 200, 200]
          },
          {
            name: "MoveComponent",
            args: []
          }
        ],
        children: [
          {
            prefabName: "GreenTriangle",
            x: 830,
            y: 230
          }
        ]
      },
      x: 900,
      y: 400,
    },
    {
      gameObject: {
        name: "EmptyChangeScene",
        components: [
          {
            name: "ChangeSceneComponent",
          }
        ]
      }
    }
  ]
}
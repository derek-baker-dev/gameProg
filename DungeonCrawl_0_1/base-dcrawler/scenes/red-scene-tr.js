export default {
  name: "RedSceneTR",
  children: [
    {
      gameObject: {
        name: "Ground",
        components: [
          { name: "DrawRecComponent", args: ["red", 800, 800] },
        ]
      }, x:20, y:50
    },
    { prefabName: "TRHero", x: 750, y: 340 },
    {
      prefabName:"MainController"
    },
    {
      gameObject: {
          name: "Controller",
          components: [
              {
                  name: "ShotReset"
              },
              {
                  name: "LastDirection"
              }
          ]
      }
  },
  {
    prefabName: "RedShot"
  }
    
  ]
}
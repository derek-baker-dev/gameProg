export default {
  name: "OrangeSceneCR",
  children: [
    {
      gameObject: {
        name: "Ground",
        components: [
          { name: "DrawRecComponent", args: ["orange", 800, 800] },
        ]
      }, x:20, y:50
    },
    { prefabName: "CRHero", x: 750, y: 340 },
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
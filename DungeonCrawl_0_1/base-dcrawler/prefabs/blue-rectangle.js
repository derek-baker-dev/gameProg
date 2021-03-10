export default {
  name:"BlueRectangle", //Prefab Name
  components:[ //List of Components
    {
      name:"DrawComponent", //Name of the component
      args:["blue"] //Optional: arguments to be passed to the component constructor
    },
    {
      name:"MoveComponent",
      args:[]
    }
  ],
  children:[
    {
      prefabName:"RedRectangle",
      x:10,
      y:10
    }
  ]
}
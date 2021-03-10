
export default {
    name: "MainSceneCT",
    children: [
        {
            gameObject: {
                name: "Ground",
                components: [
                    { name: "DrawRecComponent", args: ["white", 800, 800] },
                ]
            }, x: 20, y: 50
        },
        {
            prefabName: "MainController"
        },
        {
            prefabName: "CTHero",
            x: 300, y: 300
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
        { gameObject: { name: "ScreenText1", components: [{ name: "ScreenTextComponent", args: ["Room 1", { color: "white" }] }] }, x: 100, y: 40 },
        
        {
            prefabName: "RedShot"
        }
    ]
}
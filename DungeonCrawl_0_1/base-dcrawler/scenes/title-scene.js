export default {
    name: "TitleScene",
    children: [
        {
            prefabName: "CTHero",
            x: 300, y: 300
        },
        {
            prefabName: "CRHero",
            x: 450, y: 250
        },
        {
            prefabName: "TRHero",
            x: 100, y: 300
        },
        //{ name: "TitleCountdown", args:[500] },
        {
            gameObject: { name: "Controller", components: [ {name: "SceneChangerComponent"}, {name: "ClickToDestroyComponent"}] },
        },
        { gameObject: { name: "ScreenTextShadow1", components: [{ name: "ScreenTextComponent", args: ["Derek's Dungeon Crawler", { color: "gray" }] }] }, x: 102, y: 42 },
        { gameObject: { name: "ScreenText1", components: [{ name: "ScreenTextComponent", args: ["Derek's Dungeon Crawler", { color: "white" }] }] }, x: 100, y: 40 },
        { gameObject: { name: "ScreenText2", components: [{ name: "ScreenTextComponent", args: ["Choose A Character", { color: "blue" }] }] }, x: 100, y: 140 },
        { gameObject: { name: "ScreenTextShadow2", components: [{ name: "ScreenTextComponent", args: ["Choose A Character", { color: "gray" }] }] }, x: 102, y: 142 },
    ]
}
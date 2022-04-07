console.log("linked Menu.js")

class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    create() {
        this.add.text(300, 240, "menu goes here");
        this.scene.start("playScene")
    }
}
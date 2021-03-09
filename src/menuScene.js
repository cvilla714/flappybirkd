// import Phaser from "phaser";
import BaseScene from "./baseScene";
import sky from "./images/sky.png";

class MenuScene extends BaseScene {
  constructor(config) {
    // super("MenuScene");
    // this.config = config;
    super("MenuScene", config);

    this.menu = [
      { scene: "PlayScene", text: "Play" },
      { scene: "ScoreScene", text: "Score" },
      { scene: null, text: "Exit" },
    ];
  }

  create() {
    this.add.image(0, 0, "sky").setOrigin(0);
    super.create();
    // this.scene.start("PlayScene");
    this.createMenu(this.menu);
  }
}

export default MenuScene;

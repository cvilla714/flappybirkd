// import Phaser from "phaser";
import BaseScene from "./baseScene";
import sky from "./images/sky.png";

class MenuScene extends BaseScene {
  constructor(config) {
    super("MenuScene");
    this.config = config;
  }

  create() {
    this.add.image(0, 0, "sky").setOrigin(0);
    super.create();
    this.scene.start("PlayScene");
  }
}

export default MenuScene;

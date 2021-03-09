import Phaser from "phaser";
import sky from "./images/sky.png";

class MenuScene extends Phaser.Scene {
  constructor(config) {
    super("MenuScene");
    this.config = config;
  }

  //   preload() {
  // this.load.image("sky", sky);
  //   }

  create() {
    this.add.image(0, 0, "sky").setOrigin(0);
    this.scene.start("PlayScene");
  }
}

export default MenuScene;

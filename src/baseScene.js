import Phaser from "phaser";
import sky from "./images/sky.png";

class BaseScene extends Phaser.Scene {
  constructor(key, config) {
    super(key);
    this.config = config;
  }

  create() {
    this.add.image(0, 0, "sky").setOrigin(0);
    // this.scene.start("PlayScene");
  }
}

export default BaseScene;

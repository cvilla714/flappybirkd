import Phaser from "phaser";
import sky from "./images/sky.png";

class BaseScene extends Phaser.Scene {
  constructor(key, config) {
    super(key);
    this.config = config;
    this.screenCenter = [config.width / 2, config.height / 2];
    this.fontSize = 34;
    this.lineHeight = 42;
    this.fontOptions = { fontSize: `${this.fontSize}px`, fill: "#CD00FF" };
  }

  create() {
    this.add.image(0, 0, "sky").setOrigin(0);
    // this.scene.start("PlayScene");
  }

  createMenu(menu) {
    let lastMenuPositionY = 0;

    menu.forEach((menuItem) => {
      const menuPosition = [this.screenCenter[0], this.screenCenter[1] + lastMenuPositionY];
      this.add.text(...menuPosition, menuItem.text, this.fontOptions).setOrigin(0.5, 1);
      lastMenuPositionY += this.lineHeight;
    });
  }
}

export default BaseScene;

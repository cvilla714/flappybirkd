import Phaser from "phaser";
import sky from "./images/sky.png";
import pajaro from "./images/bird.png";
import tubo from "./images/pipe.png";
import pausa from "./images/pause.png";

class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.image("sky", sky);
    this.load.image("bird", pajaro);
    this.load.image("pipe", tubo);
    this.load.image("pausa", pausa);
  }

  create() {
    this.scene.start("MenuScene");
  }
}

export default PreloadScene;

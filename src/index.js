import Phaser from "phaser";
import PlayScene from "./playScene";
import MenuScene from "./menuScene";

const WIDTH = 800;
const HEIGHT = 600;
const BIRD_POSITION = { x: WIDTH * 0.1, y: HEIGHT / 2 };

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: BIRD_POSITION,
};

const config = {
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  physics: {
    default: "arcade",
    arcade: {
      // gravity: { y: 400 },
      debug: TextTrackCue,
    },
  },
  scene: [new MenuScene(SHARED_CONFIG), new PlayScene(SHARED_CONFIG)],
};
new Phaser.Game(config);

import Phaser from "phaser";
import sky from "./images/sky.png";
import pajaro from "./images/bird.png";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      // gravity: { y: 200 },
      debug: TextTrackCue,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update,
  },
};

function preload() {
  this.load.image("sky", sky);
  this.load.image("bird", pajaro);
}

const VELOCITY = 200;
let bird = null;

function create() {
  this.add.image(0, 0, "sky").setOrigin(0);
  bird = this.physics.add.sprite(config.width * 0.1, config.height / 2, "bird").setOrigin(0);

  this.input.on("pointerdown", function () {
    console.log("pressing mouse");
  });

  this.input.keyboard.on("keydown-SPACE", function () {
    console.log(`pressing the spacebar  button`);
  });
}

function update(time, delta) {}
new Phaser.Game(config);

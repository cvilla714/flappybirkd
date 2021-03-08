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
      gravity: { y: 200 },
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

let bird = null;

function create() {
  this.add.image(0, 0, "sky").setOrigin(0);
  // this.add.sprite(config.width / 2, config.height / 2, "bird").setOrigin(0);
  // this will move the bird  1/10th of the width
  // this.add.sprite(config.width * 0.1, config.height / 2, "bird").setOrigin(0);
  bird = this.physics.add.sprite(config.width * 0.1, config.height / 2, "bird").setOrigin(0);
  bird.body.gravity.y = 200;
  // console.log(bird.body);
  // debugger;
}

function update(time, delta) {
  console.log(bird.body.velocity.y);
}
new Phaser.Game(config);

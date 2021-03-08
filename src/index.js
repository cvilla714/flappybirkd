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
  // this.add.sprite(config.width / 2, config.height / 2, "bird").setOrigin(0);
  // this will move the bird  1/10th of the width
  // this.add.sprite(config.width * 0.1, config.height / 2, "bird").setOrigin(0);
  bird = this.physics.add.sprite(config.width * 0.1, config.height / 2, "bird").setOrigin(0);
  // bird.body.gravity.y = 200;
  // console.log(bird.body);
  // debugger;
  bird.body.velocity.x = VELOCITY;
}

// if bird positoin x is same or larger then the width of the canvs go back to the inisital positon
// if bird positio nx is samller or equal to 0 the move forward or to the right

function update(time, delta) {
  // console.log(bird.body.velocity.y);
  if (bird.body.position.x >= config.width) {
    bird.body.velocity.x = -VELOCITY;
  } else if (bird.body.position.x <= 0) {
    bird.body.velocity.x = VELOCITY;
  }
}
new Phaser.Game(config);

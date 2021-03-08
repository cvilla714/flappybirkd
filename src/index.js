import Phaser from "phaser";
import sky from "./images/sky.png";
import pajaro from "./images/bird.png";
import tubo from "./images/pipe.png";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      // gravity: { y: 400 },
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
  this.load.image("pipe", tubo);
}

const VELOCITY = 200;
const flapVelocity = 250;
let bird = null;
let upperPipe = null;
let lowerPipe = null;
const pipeVerticalDistanceRange = [150, 250];
let pipeVeritcaldistance = Phaser.Math.Between(pipeVerticalDistanceRange[0], pipeVerticalDistanceRange[1]);
let pipeVerticalPosition = Phaser.Math.Between(0 + 20, config.height - 20 - pipeVeritcaldistance);

const initialBirdPosition = { x: config.width * 0.1, y: config.height / 2 };

function create() {
  this.add.image(0, 0, "sky").setOrigin(0);
  // bird = this.physics.add.sprite(config.width * 0.1, config.height / 2, "bird").setOrigin(0);
  bird = this.physics.add.sprite(initialBirdPosition.x, initialBirdPosition.y, "bird").setOrigin(0);
  bird.body.gravity.y = 400;
  upperPipe = this.physics.add.sprite(400, pipeVerticalPosition, "pipe").setOrigin(0, 1);
  lowerPipe = this.physics.add.sprite(400, upperPipe.y + pipeVeritcaldistance, "pipe").setOrigin(0, 0);
  // this.input.on("pointerdown", function () {
  // console.log("pressing mouse");
  // });

  this.input.on("pointerdown", flap);
  // debugger;
  // this.input.keyboard.on("keydown-SPACE", function () {
  // console.log(`pressing the spacebar  button`);
  // });

  this.input.keyboard.on("keydown-SPACE", flap);
}

function update(time, delta) {
  if (bird.body.position.y > config.height || bird.body.position.y < -bird.height) {
    // alert("you have lost");
    restartBirdPositio();
  }
}

function restartBirdPositio() {
  bird.x = initialBirdPosition.x;
  bird.y = initialBirdPosition.y;
  bird.body.velocity.y = 0;
}
function flap() {
  bird.body.velocity.y = -flapVelocity;
}
new Phaser.Game(config);

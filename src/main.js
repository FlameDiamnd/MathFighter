import Phaser from "phaser";
import MathFighterScene from "./scenes/MathFighterScene";

const config = {
  type: Phaser.AUTO,
  parent: "app",
  width: 480,
  height: 640,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: true,
    },
  },
  scene: [MathFighterScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

export default new Phaser.Game(config);

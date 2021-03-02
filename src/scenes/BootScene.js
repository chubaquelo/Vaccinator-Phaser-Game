/* eslint-disable no-undef */
import "phaser";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.image("logo", "./img/vaccinator-title");
  }

  create() {
    this.add.image(380, 100, "logo").setScale(0.75);
    this.scene.start("Preloader");
  }
}
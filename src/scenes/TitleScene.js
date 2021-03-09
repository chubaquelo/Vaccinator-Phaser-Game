import Phaser from 'phaser';
import { lowlightBtn, highlightBtn } from '../utils/titleMenuHighlight';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.add.image(
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2,
      'title-bg',
    ).setScale(0.85);

    this.add.image(380, 100, 'logo').setScale(0.75);
    this.playBtn = this.add.image(this.sys.game.config.width / 2, 200, 'play-btn');
    this.leadBtn = this.add.image(this.sys.game.config.width / 2, 280, 'leaderboard-btn');
    this.creditsBtn = this.add.image(this.sys.game.config.width / 2, 360, 'credits-btn');
    const bgAudio = this.sound.add('menu-audio', { loop: true });
    const selectAudio = this.sound.add('menu-select');
    bgAudio.play();

    const getSceneNameForBtn = (btn) => {
      const btnToScene = [
        [this.playBtn, 'Game'],
        [this.leadBtn, 'Leaderboard'],
        [this.creditsBtn, 'Credits']];
      const result = btnToScene.find(([btnOpt]) => btnOpt === btn)[1];
      return result;
    };

    // Hover lighting for all buttons
    Phaser.Actions.Call([this.playBtn, this.leadBtn, this.creditsBtn], (btn) => {
      btn.alpha = 0.5;
      btn.setInteractive({ cursor: 'pointer' });
      btn.on(
        'pointerover',
        () => {
          highlightBtn(btn);
          selectAudio.play();
        },
        this,
      );
      btn.on('pointerout', () => (lowlightBtn(btn)), this);
      btn.on(
        'pointerdown',
        () => {
          bgAudio.stop();
          this.scene.start(getSceneNameForBtn(btn));
        },
        this,
      );
    });
  }
}

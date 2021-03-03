/* eslint-disable no-undef */
import 'phaser';

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
    const bgAudio = this.sound.add('menu-audio', { loop: true });
    const selectAudio = this.sound.add('menu-select');
    bgAudio.play();
    this.playBtn = this.add.image(this.sys.game.config.width / 2, 200, 'play-btn');
    this.leadBtn = this.add.image(this.sys.game.config.width / 2, 280, 'leaderboard-btn');
    this.creditsBtn = this.add.image(this.sys.game.config.width / 2, 360, 'credits-btn');

    // Hover lighting for all buttons
    Phaser.Actions.Call([this.playBtn, this.leadBtn, this.creditsBtn], (btn) => {
      btn.alpha = 0.5;
      btn.setInteractive({ cursor: 'pointer' });
      btn.on(
        'pointerover',
        () => {
          btn.alpha = 1;
          selectAudio.play();
        },
        this,
      );
      // eslint-disable-next-line no-return-assign
      btn.on('pointerout', () => (btn.alpha = 0.5), this);
    });

    // Links de los botones
    this.playBtn.on(
      'pointerdown',
      () => {
        bgAudio.stop();
        this.scene.start('Game');
      },
      this,
    );
    this.leadBtn.on(
      'pointerdown',
      () => {
        bgAudio.stop();
        this.scene.start('Leaderboard');
      },
      this,
    );
    this.creditsBtn.on(
      'pointerdown',
      () => {
        bgAudio.stop();
        this.scene.start('Credits');
      },
      this,
    );
  }
}

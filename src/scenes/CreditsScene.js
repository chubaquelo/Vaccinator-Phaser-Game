import Phaser from 'phaser';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.creditsText = this.add.text(0, 0, 'Credits', {
      fontSize: '32px',
      fill: '#fff',
    });
    this.madeByText = this.add.text(0, 0, 'By: Sergio Obolevich (@chubaquelo)', {
      fontSize: '26px',
      fill: '#fff',
    });
    this.zone = this.add.zone(
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2,
      this.sys.game.config.width,
      this.sys.game.config.height,
    );

    Phaser.Display.Align.In.Center(this.creditsText, this.zone);
    Phaser.Display.Align.In.Center(this.madeByText, this.zone);

    this.madeByText.setY(1000);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 2000,
      delay: 500,
      onComplete() {
        this.destroy();
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 5000,
      delay: 500,
      // eslint-disable-next-line func-names
      onComplete: () => {
        this.madeByTween.destroy();
        this.scene.start('Title');
      },
    });

    this.goBack = this.add.text(350, 500, '< GO BACK');

    this.goBack.setInteractive(
      new Phaser.Geom.Rectangle(
        0,
        0,
        this.goBack.width,
        this.goBack.height,
      ),
      Phaser.Geom.Rectangle.Contains,
    );

    this.goBack.on('pointerdown', () => {
      this.scene.start('Title');
    });
  }
}

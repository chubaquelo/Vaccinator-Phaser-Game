import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    this.load.image('logo', './img/vaccinator-title.png');
    this.load.image('covid', './img/covid.png');
    this.load.image('background', './img/fondo.jpg');
    this.load.spritesheet('personaje', './img/personaje.png', { frameWidth: 130, frameHeight: 191 });
    this.load.spritesheet('illGuy', './img/ill-guy.png', {
      frameWidth: 87,
      frameHeight: 185,
    });
    this.load.image('title', './img/vaccinator-title.png');
    this.load.image('vaccine', './img/vaccine.png');
    this.load.image('logo', './img/vaccinator-title.png');
    this.load.image('title-bg', './img/title-background.png');
    this.load.image('play-btn', './img/play-btn.png');
    this.load.image('leaderboard-btn', './img/leaderboard-btn.png');
    this.load.image('credits-btn', './img/credits-btn.png');
    this.load.image('city-background', './img/City2.png');
    this.load.audio('menu-audio', ['./sounds/bg-menu.wav']);
    this.load.audio('menu-select', ['./sounds/menuSelect.wav']);
    this.load.audio('game-music', ['./sounds/game-music.mp3']);
    this.load.audio('game-over', ['./sounds/game-over.wav']);

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);
    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);
    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.src}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });
  }

  create() {
    this.scene.start('Title');
  }
}

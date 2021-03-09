
import Phaser from 'phaser';
import config from './Config/config';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import TitleScene from './scenes/TitleScene';
import LeaderboardScene from './scenes/LeaderboardScene';
import GameOverScene from './scenes/GameOverScene';
import CreditsScene from './scenes/CreditsScene';
import PreloaderScene from './scenes/PreloaderScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Boot', BootScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Leaderboard', LeaderboardScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();

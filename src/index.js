import 'phaser';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import TitleScene from './Scenes/TitleScene';
import LeaderboardScene from './Scenes/LeaderboardScene';
import GameOverScene from './Scenes/GameOverScene';
import CreditsScene from './Scenes/CreditsScene';
import PreloaderScene from './Scenes/PreloaderScene';

// eslint-disable-next-line no-undef
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

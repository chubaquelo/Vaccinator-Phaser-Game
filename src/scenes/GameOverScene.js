import 'phaser';
import getScores from '../utils/getScores';
import setNewScore from '../utils/postNewLeader';

// eslint-disable-next-line no-undef
export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    let userScore;

    const gameOverSound = this.sound.add('game-over');
    gameOverSound.play();
    const gameOverText = this.add.text(
      180,
      this.sys.game.config.height / 10,
      'GAME OVER',
    );
    gameOverText.setFontSize(80);

    // Grab the current user score from localStorage
    try {
      userScore = JSON.parse(localStorage.getItem('userScore'));
      localStorage.clear();
    } catch (error) {
      window.console.log(error, 'Could not get localStorage score.');
    }

    const leaderBoardTitleText = this.add.text(
      250,
      this.sys.game.config.height / 3,
      'LeaderBoard:',
    );
    leaderBoardTitleText.setFontSize(40);

    getScores().then((result) => {
      const goToMain = () => {
        this.scene.start('Title');
      };

      if (userScore > result[9].score) {
        const congrats = this.add.text(
          215,
          this.sys.game.config.height / 3 + 40,
          'Congratulations!!!',
        );
        this.add.text(
          215,
          this.sys.game.config.height / 3 + 80,
          'You have a great score. Please save it.',
        );
        congrats.setFontSize(35);
        congrats.setColor('#2ced79');

        // Make user to input his name here.
        this.time.delayedCall(3500, () => {
          const userName = window.prompt('Please enter your name to save your score.');
          if (userName !== '' && userName !== undefined && userName !== null) {
            setNewScore(userName, userScore).then(() => {
              getScores().then(() => {
                this.scene.start('Leaderboard');
              });
            });
          }
        }, [], this);
      } else {
        let posY = 0;
        const firstTen = result.slice(0, 10);
        firstTen.forEach((element) => {
          this.add.text(
            280,
            this.sys.game.config.height / 2.3 + posY,
            element.user,
          );
          this.add.text(
            450,
            this.sys.game.config.height / 2.3 + posY,
            element.score,
          );
          posY += 25;
        });
        this.time.delayedCall(5000, goToMain, [], this);
      }
    });
  }
}

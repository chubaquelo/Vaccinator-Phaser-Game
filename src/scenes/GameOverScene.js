import "phaser";
import scores from "../utils/leaderboard";

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  create() {

    let userScore;

    let gameOverSound = this.sound.add('game-over');
    gameOverSound.play();
    let gameOverText = this.add.text(180, this.sys.game.config.height / 10, 'GAME OVER');
    gameOverText.setFontSize(80);

    // Grab the user score from localStorage
    try {
      userScore = JSON.parse(localStorage.getItem('userScore'));
      console.log('User score is: '+ userScore);
      localStorage.clear();
    } catch (error) {
      console.log(error, 'Could not get localStorage score.')
    }

    let leaderBoardTitleText = this.add.text(
      250,
      this.sys.game.config.height / 3,
      "LeaderBoard:"
    );
    leaderBoardTitleText.setFontSize(40);
    scores.then(result => {
      // result[-1] is not working. Look a method to compare.
      if (userScore > result[-1]) {
        console.log('The user has to save the score.')
      } else {
        console.log('The user DID NOT have a better score.')
        let posY = 0;
        result.forEach((element) => {
          // this.add.text(400, 400, element.score);
          this.add.text(
            280,
            this.sys.game.config.height / 2.3 + posY,
            element.user
          );
          this.add.text(
            450,
            this.sys.game.config.height / 2.3 + posY,
            element.score
          );
          posY += 25;
        });
      }
    });

    const goToMain = () => {
      this.scene.start("Title");
    };

    this.time.delayedCall(3000, goToMain, [], this);
    
  }
}

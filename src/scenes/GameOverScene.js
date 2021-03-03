import "phaser";
import getScores from "../utils/getScores";
import setNewScore from "../utils/postNewLeader";

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  create() {
    let userScore;

    let gameOverSound = this.sound.add("game-over");
    gameOverSound.play();
    let gameOverText = this.add.text(
      180,
      this.sys.game.config.height / 10,
      "GAME OVER"
    );
    gameOverText.setFontSize(80);

    // Grab the current user score from localStorage
    try {
      userScore = JSON.parse(localStorage.getItem("userScore"));
      localStorage.clear();
    } catch (error) {
      console.log(error, "Could not get localStorage score.");
    }

    let leaderBoardTitleText = this.add.text(
      250,
      this.sys.game.config.height / 3,
      "LeaderBoard:"
    );
    leaderBoardTitleText.setFontSize(40);

    getScores.then((result) => {

      const goToMain = () => {
        this.scene.start("Title");
      };

      // result[-1] is not working. Look a method to compare.
      if (userScore > result[9].score) {
        // if (true) {
        console.log("The user has to save the score.");
        let congrats = this.add.text(
          215,
          this.sys.game.config.height / 3 + 40,
          "Congratulations!!!"
        );
        this.add.text(
          215,
          this.sys.game.config.height / 3 + 80,
          "You have a great score. Please save it."
        );
        congrats.setFontSize(35);
        congrats.setColor("#2ced79");

        // Make user to input his name here.
        this.time.delayedCall(3500, () => {
          const userName = window.prompt("Please enter your name to save your score.");
          if (userName !== "" && userName !== undefined && userName !== null) {
            console.log(userName);
            setNewScore(userName, userScore).then(() => {
              getScores.then(() => {
                this.scene.start("Leaderboard");
              })
            });
          }
        }, [], this);
      } else {
        console.log("The user DID NOT have a better score.");
        let posY = 0;
        let firstTen = result.slice(0, 10);
        firstTen.forEach((element) => {
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
        this.time.delayedCall(5000, goToMain, [], this);
      }
    })
  }
}

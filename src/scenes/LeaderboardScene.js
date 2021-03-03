import 'phaser';
import getScores from "../utils/getScores";

export default class LeaderboardScene extends Phaser.Scene {

  constructor() {
    super("Leaderboard");
  }

  preload() {
  }
  
  create() {
    let leaderBoardTitleText = this.add.text(
      180,
      this.sys.game.config.height / 7,
      "LeaderBoard:"
    );
    leaderBoardTitleText.setFontSize(60);
    getScores().then((results) => {
      let posY = 0;
      let firstTen = results.slice(0, 10);
      firstTen.forEach((element) => {
        this.add
          .text(230, this.sys.game.config.height / 3.5 + posY, element.user)
          .setFontSize(30);
        this.add
          .text(520, this.sys.game.config.height / 3.5 + posY, element.score)
          .setFontSize(30);
        posY += 35;
      });
    }).catch = (err) => console.log("Some error happened", err);;

    const goToMain = () => {
      this.scene.start("Title");
    }
    
    this.time.delayedCall(3000, goToMain, [], this);

  }
  
  update () {}
}

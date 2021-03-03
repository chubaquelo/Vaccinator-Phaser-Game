import 'phaser';
import scores from "../utils/leaderboard";

export default class LeaderboardScene extends Phaser.Scene {

  constructor() {
    super("Leaderboard");
  }

  create() {
    let leaderBoardTitleText = this.add.text(
      250,
      this.sys.game.config.height / 7,
      "LeaderBoard:"
    );
    leaderBoardTitleText.setFontSize(40);
    scores.then((result) => {
      let posY = 0;
      result.forEach((element) => {
        // this.add.text(400, 400, element.score);
        this.add.text(280, this.sys.game.config.height / 4.2 + posY, element.user);
        this.add.text(450, this.sys.game.config.height / 4.2 + posY, element.score);
        posY += 25;
      });
    });

    const goToMain = () => {
      this.scene.start("Title");
    }
    
    this.time.delayedCall(3000, goToMain, [], this);

  }
}

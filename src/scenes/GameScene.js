import Phaser from 'phaser';
import { thresholds, findVelocity, findAvoidedVirusPoints } from '../utils/scoreTresholds';

let score = 0;

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    const bgAudio = this.sound.add('game-music', { loop: true });
    bgAudio.play();
    this.add
      .image(
        this.sys.game.config.width / 2,
        this.sys.game.config.height / 2,
        'city-background',
      )
      .setScale(0.55);
    this.personaje = this.physics.add
      .sprite(200, 100, 'personaje', 0)
      .setScale(0.5);
    this.personaje.status = 'Healthy'; // can be: infected / healthy / death ;
    this.personaje.jumps = 0;
    this.personaje.maxJumps = 2;
    this.personaje.speed = 10;
    this.personaje.setGravityY(550);
    this.personaje.setCollideWorldBounds(true);
    this.cursors = this.input.keyboard.createCursorKeys();

    this.scoreText = this.add.text(45, 20, `Score: ${score}`);

    this.statusText = this.add.text(
      this.sys.game.config.width - 200,
      20,
      `Status: ${this.personaje.status}`,
    );

    this.covids = this.physics.add.group({
      key: 'covid',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 },
    });

    this.covids.children.iterate((child) => {
      child.setGravityY(0);
      child.setVelocityY(100 * Math.random());
    });

    this.eraseCovid = (personaje, item) => {
      item.y = -10;
      item.x = Math.random * 800;
      if (personaje.status === 'Infected') {
        bgAudio.stop();
        try {
          localStorage.setItem('userScore', JSON.stringify(score));
        } catch (error) {
          window.console.log(error, '(localStorage not working)');
        }
        score = 0;
        this.scene.start('GameOver');
      } else if (personaje.status === 'Healthy') {
        personaje.setTexture('illGuy');
        personaje.setBodySize(84, 185);
        personaje.status = 'Infected';
        personaje.speed = 5;
        personaje.maxJumps = 1;
        this.statusText.setText(`Status: ${personaje.status}`);
        this.statusText.setColor('#e60000');
      }
    };
    this.physics.add.collider(
      this.personaje,
      this.covids,
      () => this.eraseCovid(this.personaje, this.covids),
      null,
      this,
    );
  }

  update() {
    const isJumpJustDown = Phaser.Input.Keyboard.JustDown(this.cursors.up);

    if (isJumpJustDown && this.personaje.jumps < this.personaje.maxJumps) {
      this.personaje.setVelocityY(-320);
      this.personaje.jumps += 1;
    } else if (this.cursors.up.isUp
      && this.personaje.body.onFloor()
      && this.personaje.jumps !== 0) {
      this.personaje.jumps = 0;
    } else if (this.cursors.right.isDown) {
      this.personaje.x += this.personaje.speed;
      this.personaje.setFrame(3);
    } else if (this.cursors.left.isDown) {
      this.personaje.x -= this.personaje.speed;
      this.personaje.setFrame(2);
    }

    this.covids.children.iterate((child) => {
      if (child.y > 600 || child.y < -10) {
        child.y = -10;
        child.x = Math.random() * 800;

        child.setVelocityY(100 * Math.random() + findVelocity(score) * Math.random());
        child.setVelocityX(350 * Math.random() - 350 * Math.random());
        score += findAvoidedVirusPoints(score);
      }
    });

    this.scoreText.setText(`Score: ${score}`);
  }
}

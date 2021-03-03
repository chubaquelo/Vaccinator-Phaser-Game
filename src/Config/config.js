import 'phaser';

export default {
  // eslint-disable-next-line no-undef
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: { debug: false },
  },
};

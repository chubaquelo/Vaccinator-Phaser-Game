import 'jest-canvas-mock';
import GameScene from '../scenes/GameScene';
import BootScene from '../scenes/BootScene';
import CreditsScene from '../scenes/CreditsScene';
import GameOverScene from '../scenes/GameOverScene';
import LeaderboardScene from '../scenes/LeaderboardScene';
import PreloaderScene from '../scenes/PreloaderScene';
import TitleScene from '../scenes/TitleScene';


describe('Scenes are functions test', () => {
  it('Game Scene is a function', () => {
    expect(typeof GameScene).toBe('function');
  });
  it('Game Scene is a function', () => {
    expect(typeof GameScene).not.toBe('undefined');
  });

  it('Boot Scene is a function', () => {
    expect(typeof BootScene).toBe('function');
  });
  it('Boot Scene is a function', () => {
    expect(typeof BootScene).not.toBe('undefined');
  });

  it('Credits Scene is a function', () => {
    expect(typeof CreditsScene).toBe('function');
  });
  it('Credits Scene is a function', () => {
    expect(typeof CreditsScene).not.toBe('undefined');
  });

  it('GameOver Scene is a function', () => {
    expect(typeof GameOverScene).toBe('function');
  });
  it('GameOver Scene is a function', () => {
    expect(typeof GameOverScene).not.toBe('undefined');
  });

  it('Leaderboard Scene is a function', () => {
    expect(typeof LeaderboardScene).toBe('function');
  });
  it('Leaderboard Scene is a function', () => {
    expect(typeof LeaderboardScene).not.toBe('undefined');
  });

  it('Preloader Scene is a function', () => {
    expect(typeof PreloaderScene).toBe('function');
  });
  it('Preloader Scene is a function', () => {
    expect(typeof PreloaderScene).not.toBe('undefined');
  });

  it('Title Scene is a function', () => {
    expect(typeof TitleScene).toBe('function');
  });
  it('Title Scene is a function', () => {
    expect(typeof TitleScene).not.toBe('undefined');
  });
});
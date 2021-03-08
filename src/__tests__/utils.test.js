import { sortComparison } from '../utils/getScores';
import { lowlightBtn, highlightBtn } from '../utils/titleMenuHighlight';
import { thresholds, findVelocity, findAvoidedVirusPoints } from '../utils/scoreTresholds';

describe('Sort Comparison working correctly', () => {
  const trialArray = [
    { user: 'Guy 3', score: 300 },
    { user: 'Guy 1', score: 100 },
    { user: 'Guy 2', score: 200 },
  ];
  it('sorting comparison working good', () => {
    expect(trialArray.sort(sortComparison)).toEqual([
      { score: 300, user: 'Guy 3' },
      { score: 200, user: 'Guy 2' },
      { score: 100, user: 'Guy 1' },
    ]);
    expect(trialArray.sort(sortComparison)).not.toEqual([
      { user: 'Guy 3', score: 300 },
      { user: 'Guy 1', score: 100 },
      { user: 'Guy 2', score: 200 },
    ]);
    expect(trialArray.sort(sortComparison)).not.toEqual([
      { user: 'Guy 1', score: 100 },
      { user: 'Guy 2', score: 200 },
      { user: 'Guy 3', score: 300 },
    ]);
  });
});

describe('TitleScene menu buttons lighting', () => {
  const btn = {};
  btn.alpha = 0;
  it('lowlights highlights', () => {
    lowlightBtn(btn);
    expect(btn.alpha).toEqual(0.5);
    expect(btn.alpha).not.toEqual(1);
  });
  it('highlights button', () => {
    highlightBtn(btn);
    expect(btn.alpha).toEqual(1);
    expect(btn.alpha).not.toEqual(0.5);
  });
});

describe('Check scoring threshold helpers', () => {
  it('thresholds steps are as expected', () => {
    const notExpected = [
      [1500, 1830, 10],
      [1000, 250, 20],
      [800, 350, 8],
      [450, 600, 16],
      [200, 100, 44],
      [40, 125, 3],
      [0, 160, 2],
    ];
    const expectedSteps = [
      [1500, 1500, 10],
      [1000, 850, 10],
      [800, 450, 8],
      [450, 300, 6],
      [200, 200, 4],
      [40, 175, 3],
      [0, 150, 2],
    ];
    expect(thresholds).toEqual(expectedSteps);
    expect(thresholds).not.toEqual(notExpected);
  });
  it('Find correct velocity for set score.', () => {
    const vel = findVelocity(148);
    expect(vel).toEqual(175);
    expect(vel).not.toEqual(275);
  });
  it('Correct points per virus for set score.', () => {
    const vel = findAvoidedVirusPoints(148);
    expect(vel).toEqual(3);
    expect(vel).not.toEqual(5);
  });
});

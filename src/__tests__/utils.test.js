import { sortComparison } from '../utils/getScores';

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
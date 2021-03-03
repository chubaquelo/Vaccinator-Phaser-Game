// eslint-disable-next-line func-names
const getScores = async function () {
  const results = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/u5fkIyDgBbkpa2zeyYIH/scores',
    {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then((response) => response.json())
    .then((object) => {
      const scoresArray = object.result;
      return scoresArray;
    }).then((results) => {
      function compareScoreValue(a, b) {
        if (a.score > b.score) {
          return -1;
        }
        if (a.score < b.score) {
          return 1;
        }
        return 0;
      }
      results.sort(compareScoreValue);
      return results;
    })
    .catch((err) => window.console.log('Could not reach data.', err));
  return results;
};

export default getScores;

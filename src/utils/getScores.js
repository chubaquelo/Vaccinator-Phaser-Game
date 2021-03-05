// eslint-disable-next-line func-names
const sortComparison = (a, b) => {
  if (a.score > b.score) { return -1; }
  if (a.score < b.score) { return 1; }
  return 0;
};

const getScores = async () => {
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
    .then((object) => object.result)
    .then((results) => results.sort(sortComparison))
    .catch((err) => window.console.log('Could not reach data.', err));
  return results;
};

export default getScores;

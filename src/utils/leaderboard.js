const fetch = require("node-fetch")

const scores =
  fetch(
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Lp5bRXq2CB42cBsyQFhI/scores",
  {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }
)
  .then((response) => response.json())
  .then((object) => {
    let scoresArray = object.result;
    return scoresArray;
  }).catch((err) => console.log('Could not reach data.', err));

  scores.then((result) => {
    
    function compareScoreValue(a, b) {
      if (a.score > b.score) {
        return -1;
      }
      if (a.score < b.score) {
        return 1;
      }
      return 0;
    }

    result.sort(compareScoreValue);
    return result;
    // result.forEach(element => {
    //   console.log(element);
    // });
  });

  export default scores;

// fetch(
//   "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Lp5bRXq2CB42cBsyQFhI/scores",
//   {
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify(data),
//   }
// )
//   .then((response) => response.json())
//   .then((object) => scoresObject = object)
//   .catch(console.log("Some error happened"));

// const getScoresList = () => {
//   scoreList.textContent = "";

//   fetch(
//     "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Lp5bRXq2CB42cBsyQFhI/scores",
//     {
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   )
//     .then((response) => response.json())
//     .then((list) => {
//       let results = list.result;
//       for (let i = 0; i < results.length; i++) {
//         let score = document.createElement("p");
//         score.textContent = `
//           User: ${results[i].user} , Score: ${results[i].score}
//         `;
//         scoreList.append(score);
//       }
//     })
//     .catch(console.log("Some error happened"));
// };

// refreshBtn.addEventListener("click", getScoresList);
// saveScore.addEventListener("click", postUserScore);

// getScoresList();

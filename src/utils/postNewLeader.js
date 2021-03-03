const setNewScore = async (userName, userScore) => {
  const data = {
    user: userName,
    score: userScore,
  };
  console.log('setNewScore function is being called..');
  console.log('User and score sent to the function are', userName, userScore);
  console.log('After this comes fetch function calling..');
  await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/u5fkIyDgBbkpa2zeyYIH/scores",
    {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  )
}
  

  export default setNewScore;

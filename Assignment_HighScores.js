const highScoresList = document.getElementById("highScoresList");
const highScore = JSON.parse(localStorage.getItem("highScore")) || [];

// console.log(highScores);

// console.log(

highScoresList.innerHTML = highScore.map(score =>   {
    return `<li class ="high-score">${score.name} - ${score.score}</li>`;
})
.join("");
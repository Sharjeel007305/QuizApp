const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse (localStorage.getItem('highScore')) || [];

const MAX_HIGH_SCORES = 5;
// console.log(highScores);

// console.log(JSON.parse (localStorage.getItem("highScores")));
finalScore.innerText = mostRecentScore;




username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
    console.log("clicked the save button!");
});

saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();

    const score = {
        score : Math.floor(Math.random()*100),
        name : username.value
    };

    // console.log(score);

    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score)
    highScores.splice(5);

    localStorage.setItem("highScore", JSON.stringify(highScores));
    window.location.assign("/Assignment_MCQS.html");

    // console.log(highScores);

};



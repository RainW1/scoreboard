let homeStoreEl = document.getElementById("home-score")
let awayStoreEl = document.getElementById("away-score")
let homeScore = 0
let awayScore = 0 

function increaseScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        homeStoreEl.textContent = homeScore.toString().padStart(2,"0");
    }
      else if (team === "away") {
        awayScore += points;
        awayStoreEl.textContent = awayScore.toString().padStart(2,"0");
    }
}

function resetScore() {
    homeScore = 0
    awayScore = 0
    homeStoreEl.textContent = "00"
    awayStoreEl.textContent = "00"
}

let seconds = 0;
let timer = null;

function startTimer() {
    if (timer) return;
    timer = setInterval(() => {
        seconds++;
// mins => making total seconds to minute 
// secs => count the seconds left
        const mins = Math.floor(seconds / 60); 
        const secs = seconds % 60;

        document.getElementById("timer").textContent = 
            (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs; 
    }, 1000)   
}
function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer(); // stop first
    seconds = 0;
    document.getElementById("timer").textContent = "00:00";
}

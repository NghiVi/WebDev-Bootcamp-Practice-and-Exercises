const p1 = {
    score: 0,
    roundWon: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
    roundDisplay: document.querySelector('#p1RoundWon')
}
const p2 = {
    score: 0,
    roundWon: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
    roundDisplay: document.querySelector('#p2RoundWon')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
const winningRoundSelect = document.querySelector('#bestof');
let gameWon = 3;
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            player.score = 0;
            opponent.score = 0;
            player.roundWon += 1;
        }

        player.display.textContent = player.score;
        opponent.display.textContent = opponent.score;

        if (player.roundWon === gameWon) {
            isGameOver = true;
            player.roundDisplay.classList.add('has-text-success');
            opponent.roundDisplay.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }

        player.roundDisplay.textContent = player.roundWon;

    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

winningRoundSelect.addEventListener('change', function () {
    gameWon = parseInt(this.value);
    reset();
})


resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.roundWon = 0;
        p.roundDisplay.textContent = 0;
        p.roundDisplay.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

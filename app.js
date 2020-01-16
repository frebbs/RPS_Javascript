const game = () => {
    let pScore = 0;
    let cScore = 0;
    let draws = 0;

    // Start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    // Play the game
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const bothHands = document.querySelectorAll(".hands img");
        const computerOptions = ['rock', 'paper', 'scissors'];

        bothHands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            })
        })

        options.forEach(option => {
            option.addEventListener("click", function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    whoWins(this.textContent, computerChoice)
                    // update the image
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000)

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };


    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        const gameDraws = document.querySelector('.draws p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        gameDraws.textContent = draws;

    };

    const whoWins = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");
        if(playerChoice === computerChoice) {
            winner.textContent = 'It is a Tie!';
            draws++;
            updateScore();
            return;
        }

        if(playerChoice === 'rock') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'Player Wins'
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins'
                cScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'paper') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins'
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins'
                pScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'scissors') {
            if(computerChoice === 'rock') {
                winner.textContent = 'Computer Wins'
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins'
                pScore++;
                updateScore();
                return;
            }
        }
    }
    startGame();
    playMatch();
}

game();
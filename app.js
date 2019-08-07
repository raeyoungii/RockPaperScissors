const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.replace("fadeIn", "fadeOut");
      match.classList.replace("fadeOut", "fadeIn");
      resetMatch();
    });
    //reset
    const resetMatch = () => {
      const winner = document.querySelector(".winner");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      winner.textContent = "Choose an option";
      playerHand.src = "./assets/rock.png";
      computerHand.src = "./assets/rock.png";
    };
  };
  //Go to home
  const endGame = () => {
    const mainBtn = document.querySelector(".main button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    mainBtn.addEventListener("click", () => {
      match.classList.replace("fadeIn", "fadeOut");
      introScreen.classList.replace("fadeOut", "fadeIn");
      pScore = 0;
      cScore = 0;
      updateScore();
    });
  };
  //Play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        setTimeout(() => {
          //Call compareHands
          compareHands(this.textContent, computerChoice);
          updateScore();
          //Update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 1000);
        //Animation
        playerHand.style.animation = "shakePlayer 1s ease";
        computerHand.style.animation = "shakeComputer 1s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    //Check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins";
        pScore++;
        return;
      } else {
        winner.textContent = "Computer wins";
        cScore++;
        return;
      }
    }
    //Check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player wins";
        pScore++;
        return;
      } else {
        winner.textContent = "Computer wins";
        cScore++;
        return;
      }
    }
    //Check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player wins";
        pScore++;
        return;
      } else {
        winner.textContent = "Computer wins";
        cScore++;
        return;
      }
    }
  };
  //Call all the inner function
  startGame();
  playMatch();
  endGame();
};

//Start the game function
game();

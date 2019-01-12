function playRound(playerSelection, computerSelection) {
  // My code goes here
}

const playerSelection = 'Rock'
const computerSelction = computerPlay()
console.log(playRound(playerSelection, computerSelction))

computerPlay() {
  return Math.floor((Math.random() * 3) + 1);
}

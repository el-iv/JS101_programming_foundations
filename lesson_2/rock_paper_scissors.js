const readline = require('readline-sync');
const MESSAGES = require('./rock_paper_scissors_messages.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];


const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors']
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function messages(message) {
  return MESSAGES[message];
}

function getPlayerOption() {
  prompt(messages('chooseFromOptions') + VALID_CHOICES.join(', '));
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(messages("invalidChoice"));
    choice = readline.question();
  }
  return choice;
}

function getComputerOption() {
    let randomIndex = Math.ceil(Math.random() * VALID_CHOICES.length) - 1;
    return VALID_CHOICES[randomIndex];
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayRoundWinner(winner) {
  if (winner === 'Player') {
    prompt(messages('playerWinsRound'));
  } else if (winner === 'computerWinsRound') {
    prompt(messages('computerWins'));
  } else {
    prompt(messages('noWinnerRound'));
  }
}

function outputWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    return 'Player';
  } else if (choice === computerChoice) {
    return 'none';
  } else {
    return 'Computer';
  }
}

function updateScore(score, winner) {
  if (winner === 'Player') {
    score['Player'] += 1;
  } else if (winner === 'Computer') {
    score['Computer'] += 1;
  }
}

function displayCurrentScore(score) {
  prompt('CURRENT SCORE');
  prompt("Player: "  + score['Player'] + " pts   Computer: " +
          score['Computer'] + " pts");
}

function isMatchOver(score) {
  return (score['Player'] === 5 ||  score['Computer'] === 5);
}

function outputBigWinner(score) {
  let winner = '';
  let players = Object.keys(score);

  if (score[players[0]] < score[players[1]]) {
    winner = players[0];
  } else {
    winner = players[1];
  }
  return winner;
}

function displayFinalScore(score) {
  prompt('FINAL SCORE');
  prompt("Player: "  + score['Player'] + " pts   Computer: " +
          score['Computer'] + " pts");
  prompt(`The big winner is: ${outputBigWinner(score)}`);
}

function isValidAnswer(answer) {
  return ['y', 'n', 'yes', 'no'].includes(answer.toLowerCase());
}

function anotherGame() {
  prompt(messages('anotherGame'));
  let answer = readline.question();

  while (!isValidAnswer(answer)) {
    prompt(messages('anotherGameError'));
    answer = readline.question();
 }
  return ['y', 'yes'].includes(answer.toLowerCase());
}


while (true) {
  let score = {
      Player: 0,
      Computer: 0
  };

  let roundsNumber = 1;

  while (!isMatchOver(score)) {
    prompt(messages("roundNumber") + roundsNumber);
    let choice = getPlayerOption();
    let computerChoice = getComputerOption();

    let roundWinner = outputWinner(choice, computerChoice);
    displayRoundWinner(roundWinner);

    updateScore(score, roundWinner);

    displayCurrentScore(score);

    roundsNumber += 1;
    console.log('\n');
  }

  displayFinalScore(score);
  console.log('\n');

  if (!anotherGame()) {
    prompt(messages('bye'));
    break;
  }

  console.clear();
}

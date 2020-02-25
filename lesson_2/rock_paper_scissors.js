const readline = require('readline-sync');
const MESSAGES = require('./rock_paper_scissors_messages.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];


const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
}

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
  }
  else if (winner === 'computerWinsRound') {
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
  } else if (winner === 'Computer'){
    score['Computer'] += 1;
  }
}

function displayCurrentScore(score) {
  prompt("Current score Player: "  + score['Player'] + " pts   Computer: " +
          score['Computer'] + " pts");
}

function isMatchOver(score) {
  return (score['Player'] === 5 ||  score['Computer'] === 5);
}

function bigWinner(score) {
  if (score['Player'] > score['Computer']) {
    return 'Player';
  } else {
    return 'Computer';
  }
}

function displayFinalScore(score) {
  prompt('Final results:');
  displayCurrentScore(score);
  prompt(`The big winner is: ${bigWinner(score)}`);
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
  }

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
  console.log(score);

  if (!anotherGame()) {
    prompt(messages('bye'));
    break;
  }

  console.clear();
}

const readline = require('readline-sync');
const MESSAGES = require('./rock_paper_scissors_messages.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
/* eslint-disable id-length */
const SHORTENED_VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  s: 'scissors',
  l: 'lizard',
  sp: 'spock'
};
/* eslint-disable id-length */
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

function displayRules() {
  Object.entries(SHORTENED_VALID_CHOICES).forEach(([key, value]) => {
    console.log(`Type ${key} for ${value}`);
  });
}

function getPlayerOption() {
  prompt(messages('chooseFromOptions') + VALID_CHOICES.join(', '));
  let choice = readline.question();

  while (!Object.keys(SHORTENED_VALID_CHOICES).includes(choice)) {
    prompt(messages("invalidChoice"));
    choice = readline.question();
  }
  return SHORTENED_VALID_CHOICES[choice];
}

function getComputerOption() {
    let randomIndex = Math.ceil(Math.random() * VALID_CHOICES.length) - 1;
    return VALID_CHOICES[randomIndex];
}

function displayChoices(playerChoice, computerChoice) {
  prompt(`Player chose ${playerChoice},  Computer chose ${computerChoice}`);
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayRoundWinner(winner) {
  if (winner === 'Player') {
    prompt(messages('playerWinsRound'));
  } else if (winner === 'Computer') {
    prompt(messages('computerWinsRound'));
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
  prompt("CURRENT SCORE     Player: "  + score['Player'] + " pts   Computer: " +
          score['Computer'] + " pts");
}

function isMatchOver(score) {
  return (score['Player'] === 5 ||  score['Computer'] === 5);
}

function outputBigWinner(score) {
  let winner = '';
  let players = Object.keys(score);

  if (score[players[0]] < score[players[1]]) {
    winner = players[1];
  } else {
    winner = players[0];
  }
  return winner;
}

function displayFinalScore(score) {
  prompt("FINAL SCORE     Player: "  + score['Player'] + " pts   Computer: " +
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

prompt(messages('welcome'));
displayRules();
console.log('\n');
while (true) {
  let score = {
      Player: 0,
      Computer: 0
  };

  let roundsNumber = 1;

  while (!isMatchOver(score)) {
    prompt(messages("roundNumber") + roundsNumber);
    let playerChoice = getPlayerOption();
    let computerChoice = getComputerOption();

    let roundWinner = outputWinner(playerChoice, computerChoice);

    displayChoices(playerChoice, computerChoice);
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

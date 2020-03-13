const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = '0';
const WINNING_SCORE = 3;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  console.clear();

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function joinOr(arr, delimeter = ', ', lastDelimeter = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return arr;
    case 2:
      return arr.join(" " + lastDelimeter + " ");
    default:
      return arr.slice(0, arr.length - 1).join(delimeter)
              + " " + lastDelimeter + " " + arr[arr.length - 1];
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares.length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWonGame(board) {
  return !!detectGameWinner(board);
}

/* eslint-disable max-lines-per-function */
function detectGameWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];


  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function setupScore() {
  let score = {};
  score.Player = 0;
  score.Computer = 0;
  return score;
}

function displayScore(score) {
  for (let player in score) {
    console.log(`${player}'s score: ${score[player]} pts`);
  }
}

function updateScore(score, gameWinner) {
  score[gameWinner] += 1;
}

function someoneWonMatch(score) {
  return Object.values(score).some(
                              pointsNumber => pointsNumber === WINNING_SCORE);
}

function displayGrandWinner(score) {
  let players = Object.keys(score);
  players.sort((a, b) => score[b] - score[a]);

  console.log(`The grand winner is ${players[0]}.`);
}

function displayCurrentScore(score, board) {
  updateScore(score, detectGameWinner(board));
  displayScore(score);
  console.log('');

  prompt('Hit enter to move on to the next game:');
  let input = readline.question();

  while (input !== '') {
    prompt("Just hit enter to move on to the next game!!!");
    input = readline.question();
  }
}


let score = setupScore();
while (!someoneWonMatch(score)) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWonGame(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWonGame(board) || boardFull(board)) break;

  }

  displayBoard(board);

  if (someoneWonGame(board)) {
    prompt(`${detectGameWinner(board)} won this game!`);
  } else {
    prompt("It's a tie!");
  }
  displayCurrentScore(score, board);
}
displayGrandWinner(score);

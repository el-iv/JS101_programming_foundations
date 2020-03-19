const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_SCORE = 3;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
const CENTER_SQUARE = '5';
const COMPUTER_PLAYER = 'Computer';
const HUMAN_PLAYER = 'Player'; // you

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
  console.log(HUMAN_PLAYER + "'s marker is " + HUMAN_MARKER + " and "
              + COMPUTER_PLAYER + "'s marker is " + COMPUTER_MARKER + "\n");
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function welcomeMessage() {
  prompt('Welcome to Tic Tac Toe!');
  prompt('The first player who reaches 3 winning rounds is the grand winner!');
  console.log('');
}

function pickPlayerFirstMove() {
  prompt('Who moves first? (P)layer or (C)omputer?');
  let answer = readline.question().toLowerCase();

  //while (answer !== 'p' && answer !== 'c') {
  while (!['p', 'c'].includes(answer)) {
    prompt('Error! Who moves first? (P)layer or (C)omputer?');
    answer = readline.question().toLowerCase();
  }

  let firstPlayer;
  if (answer === 'p') {
     firstPlayer = HUMAN_PLAYER;
  } else if (answer === 'c') {
      firstPlayer = COMPUTER_PLAYER;
  }

  return firstPlayer;
}

function joinOr(arr, delimeter = ', ', lastDelimeter = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr}`;
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

function outputOffensiveSquare(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  return square;
}

function outputDefensiveSquare(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }
  return square;
}

function outputCenterSquare(board) {
  let square;
  if (emptySquares(board).includes(CENTER_SQUARE)) {
    square = CENTER_SQUARE;
  }
  return square;
}

function outputRandomSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  return emptySquares(board)[randomIndex];
}

function computerChoosesSquare(board) {
  let square = outputOffensiveSquare(board);

  if (!square) {
    square = outputDefensiveSquare(board);
  }
  if (!square) {
    square = outputCenterSquare(board);
  }
  if (!square) {
    square = outputRandomSquare(board);
  }

  board[square] = COMPUTER_MARKER;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWonRound(board) {
  return !!detectRoundWinner(board);
}

function detectRoundWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

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

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
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
  console.log('');
}

function updateScore(score, roundWinner) {
  if (roundWinner !== null) {
    score[roundWinner] += 1;
  }
}

function displayRoundResults(roundWinner) {
  if (roundWinner !== null) {
      prompt(`${roundWinner} won this round!`);
    } else {
      prompt("It's a tie!");
    }
  console.log('');
}


function someoneWonMatch(score) {
  return Object.values(score).some(
                              pointsNumber => pointsNumber === WINNING_SCORE);
}

function displayGrandWinner(score) {
  let players = Object.keys(score);
  players.sort((a, b) => score[b] - score[a]);

  prompt(`The grand winner is ${players[0]}!!!`);
  console.log('');
}

function moveToNextRound() {
  prompt('Hit enter to move on to the next round:');
  let input = readline.question();

  while (input !== '') {
    prompt("Just hit enter to move on to the next round!!!");
    input = readline.question();
  }
}

function isNewMatch() {
  prompt('Would you like to play a new match? (y/n)');
  let answer = readline.question().toLowerCase();

  while (!['y','n'].includes(answer)) {
    prompt('Error. Would you like to play a new match? (y/n)');
    answer = readline.question().toLowerCase();
  }
  return answer === 'y';
}

function chooseSquare(board, player) {
  if (player === HUMAN_PLAYER) {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === HUMAN_PLAYER ? COMPUTER_PLAYER : HUMAN_PLAYER;
}

function startMatch() {
  console.clear();
  welcomeMessage();
  let score = setupScore();
  let firstMovePlayer = pickPlayerFirstMove();

  while (!someoneWonMatch(score)) {
    startRound(firstMovePlayer, score);
    if (!someoneWonMatch(score)) {
      moveToNextRound(score);
    }
  }

  displayGrandWinner(score);
}

function startRound(currentPlayer, score) {
  let board = initializeBoard();
  while (true) {
    displayBoard(board);
    displayScore(score);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWonRound(board) || boardFull(board)) break;
  }

  displayBoard(board);
  let roundWinner = detectRoundWinner(board);
  updateScore(score, roundWinner);
  displayScore(score);
  displayRoundResults(roundWinner);
}

while (true) {
  startMatch();
  if (!isNewMatch()) {
    prompt('Goodbye!');
    break;
  }
}

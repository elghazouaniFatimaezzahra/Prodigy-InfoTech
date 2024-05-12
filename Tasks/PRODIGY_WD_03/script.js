let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleClick(index) {
  if (gameBoard[index] === '' && gameActive) {
    gameBoard[index] = currentPlayer;
    document.getElementById('game-board').children[index].innerText = currentPlayer;
    if (checkWin()) {
      document.getElementById('message').innerText = `${currentPlayer} wins!`;
      gameActive = false;
    } else if (checkDraw()) {
      document.getElementById('message').innerText = 'It\'s a draw!';
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  return winningCombos.some(combination => {
    return combination.every(index => {
      return gameBoard[index] === currentPlayer;
    });
  });
}

function checkDraw() {
  return gameBoard.every(cell => cell !== '');
}

function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.getElementById('message').innerText = '';
  Array.from(document.getElementById('game-board').children).forEach(cell => {
    cell.innerText = '';
  });
}

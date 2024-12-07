const gameBoard = (function () {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const placeSymbol = function (row, col, symbol) {
    board[row][col] = symbol;
  };

  return { board, placeSymbol };
})();

console.log(gameBoard.board);

const playGame = function () {
  const players = [
    {
      player1: "player1",
      symbol: "X",
    },
    {
      player2: "player2",
      symbol: "O",
    },
  ];

  const activePlayer = console.log(players[1].symbol);

  const displayBoard = gameBoard.board;

  gameBoard.placeSymbol(1, 1, "X");
  console.log(displayBoard);
};

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
      name: "player1",
      symbol: "X",
    },
    {
      name: "player2",
      symbol: "O",
    },
  ];

  let activePlayer = players[0];
  console.log(`${activePlayer.name}'s turn`);
  console.log(gameBoard.board);
  console.log(activePlayer.symbol);

  const switchPlayer = function () {
    activePlayer === players[0]
      ? (activePlayer = players[1])
      : (activePlayer = players[0]);
  };

  return { switchPlayer, activePlayer };
};

console.log(playGame().activePlayer.symbol);

const gameController = function (
  row,
  col,
  symbol = playGame.activePlayer.symbol
) {};

const gameBoard = (function () {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const displayBoard = () => board;

  const placeSymbol = function (row, col, symbol) {
    board[row][col] = symbol;
  };

  return { placeSymbol, displayBoard };
})();

const gameController = function () {
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

  const switchPlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const printRound = function () {
    console.log(`${activePlayer.name}'s turn`);
    console.log(gameBoard.displayBoard());
  };

  const play = function (row, col, symbol = activePlayer.symbol) {
    gameBoard.placeSymbol(row, col, symbol);
    switchPlayer();
    printRound();
  };
  printRound();

  return { play };
};

const game = gameController();

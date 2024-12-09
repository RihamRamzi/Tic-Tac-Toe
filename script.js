const gameBoard = (function () {
  const board = [
    ["X", "X", "X"],
    ["X", "X", "X"],
    ["X", "X", ""],
  ];

  const displayBoard = () => board;

  // const cellCheck = function () {
  //   board.forEach((row) =>
  //     row.forEach((col) =>
  //       col !== "" ? console.log(`draw`) : console.log(`test`)
  //     )
  //   );
  // };

  const placeSymbol = function (row, col, symbol) {
    board[row][col] = symbol;
  };

  return { placeSymbol, displayBoard, board };
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
    if (gameBoard.board[row][col] === "") {
      gameBoard.placeSymbol(row, col, symbol);
      switchPlayer();
      printRound();
    } else {
      console.log(`Slot taken`);
      printRound();
    }
  };
  printRound();

  return { play };
};

const game = gameController();

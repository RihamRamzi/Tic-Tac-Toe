const gameBoard = (function () {
  const board = [
    ["X", "X", "X"],
    ["X", "X", "X"],
    ["X", "X", ""],
  ];

  const displayBoard = () => board;

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

  let isFilled = false;

  const play = function (row, col, symbol = activePlayer.symbol) {
    //checks is cell is empty to place symbol
    if (gameBoard.board[row][col] === "") {
      gameBoard.placeSymbol(row, col, symbol);
      switchPlayer();
      printRound();
    } else {
      console.log(`Slot taken`);
      printRound();
    }
    drawCheck();
  };

  const drawCheck = function () {
    gameBoard.board.forEach((row) =>
      row.forEach((col) => {
        if (col === "") {
          isFilled = false;
        } else {
          isFilled = true;
        }
      })
    );

    if (isFilled === true) {
      console.log(`Draw`);
    }
  };
  printRound();

  return { play };
};

const game = gameController();

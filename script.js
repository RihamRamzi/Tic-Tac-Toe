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

  const getActivePlayer = () => activePlayer;

  const printRound = function () {
    console.log(`${activePlayer.name}'s turn`);
    console.log(gameBoard.displayBoard());
  };

  let win = false;

  const play = function (row, col, symbol = activePlayer.symbol) {
    //checks is cell is empty to place symbol
    if (gameBoard.board[row][col] === "") {
      gameBoard.placeSymbol(row, col, symbol);
      winCheck();

      if (win === true) {
        console.log(`Game Over`);
      } else {
        switchPlayer();
        printRound();
      }
    } else {
      console.log(`Slot taken`);
      printRound();
    }
    drawCheck();
  };

  const drawCheck = function () {
    let drawCount = 0;

    for (let row of gameBoard.board) {
      for (let col of row) {
        if (col !== "") {
          drawCount++;
        }
      }
    }

    if (drawCount === 9) {
      console.log(`Draw`);
    }
    return { drawCount };
  };

  const winCheck = function () {
    const rows = gameBoard.board.length;
    const cols = gameBoard.board[0].length;

    const directions = [
      { row: 0, col: 1 },
      { row: 1, col: 0 },
      { row: 1, col: 1 },
      { row: -1, col: 1 },
    ];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // looping through directions
        for (const { row: rowD, col: colD } of directions) {
          let count = 0;
          for (let i = 0; i < 3; i++) {
            const newRow = row + rowD * i;
            const newCol = col + colD * i;

            if (
              newRow >= 0 &&
              newRow < rows &&
              newCol >= 0 &&
              newCol < cols &&
              gameBoard.board[newRow][newCol] === activePlayer.symbol
            ) {
              count++;
            }
          }
          if (count === 3) {
            console.log(`${activePlayer.name} WON`);
            win = true;
          }
        }
      }
    }
  };
  printRound();

  return { play, getActivePlayer, drawCheck };
};

const board = document.querySelector(".board");
const rows = 3;
const cols = 3;

for (row = 0; row < rows; row++) {
  for (col = 0; col < cols; col++) {
    const box = document.createElement("button");
    box.classList.add("box");
    box.dataset.row = row;
    box.dataset.col = col;
    board.appendChild(box);
  }
}

board.addEventListener("click", (e) => {
  let drawCount = game.drawCheck().drawCount;
  const row = e.target.dataset.row;
  const col = e.target.dataset.col;
  e.target.textContent = game.getActivePlayer().symbol;
  e.target.disabled = true;
  game.play(row, col);
  if (drawCount === 8) {
  }
});
const game = gameController();

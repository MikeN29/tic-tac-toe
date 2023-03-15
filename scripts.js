//gameboard array

//let turnTracker = 1;

function gameBoardFunction() {
  let gameBoardArray = ["", "", "", "", "", "", "", "", ""];

  this.turnTracker = 1;

  const changeCell = function (index, cellID) {
    let cell = document.getElementById(cellID);

    if (cell.childNodes.length == 0 && turnTracker % 2 == 0) {
      turnTracker = turnTracker + 1;
      let userSymbol = "x";
      gameBoardArray[index] = userSymbol;
      console.log(gameBoardArray);
      document.getElementById(cellID).innerText = userSymbol;
      checkWinner(turnTracker);
    } else if (cell.childNodes.length == 0 && turnTracker % 2 == 1) {
      turnTracker = turnTracker + 1;
      let userSymbol = "o";
      gameBoardArray[index] = userSymbol;
      console.log(gameBoardArray);
      document.getElementById(cellID).innerText = userSymbol;
      checkWinner(turnTracker);
    } else {
      alert("Choose a different cell!");
    }
  };

  //function to check winning condition

  const checkWinner = function (turnTracker) {
    if (
      gameBoardArray[0] === "o" &&
      gameBoardArray[1] === "o" &&
      gameBoardArray[2] === "o"
    ) {
      document.getElementById("gameResult").innerHTML =
        playersArray[0].name + " is the winner!";
      clearGameBoard(gameBoardArray);
    } else if (
      gameBoardArray[3] === "o" &&
      gameBoardArray[4] === "o" &&
      gameBoardArray[5] === "o"
    ) {
      document.getElementById("gameResult").innerHTML =
        playersArray[0].name + " is the winner!";
      clearGameBoard(gameBoardArray);
    } else if (
      gameBoardArray[6] === "o" &&
      gameBoardArray[7] === "o" &&
      gameBoardArray[8] === "o"
    ) {
      document.getElementById("gameResult").innerHTML =
        playersArray[0].name + " is the winner!";
      clearGameBoard(gameBoardArray);
    } else if (
      gameBoardArray[0] === "o" &&
      gameBoardArray[3] === "o" &&
      gameBoardArray[6] === "o"
    ) {
      document.getElementById("gameResult").innerHTML =
        playersArray[0].name + " is the winner!";
      clearGameBoard(gameBoardArray);
    } else if (
      gameBoardArray[1] === "o" &&
      gameBoardArray[4] === "o" &&
      gameBoardArray[7] === "o"
    ) {
      document.getElementById("gameResult").innerHTML =
        playersArray[0].name + " is the winner!";
      clearGameBoard(gameBoardArray);
    } else if (
      gameBoardArray[2] === "o" &&
      gameBoardArray[5] === "o" &&
      gameBoardArray[8] === "o"
    ) {
      document.getElementById("gameResult").innerHTML =
        playersArray[0].name + " is the winner!";
      clearGameBoard(gameBoardArray);
    } else if (
      gameBoardArray[0] === "o" &&
      gameBoardArray[4] === "o" &&
      gameBoardArray[8] === "o"
    ) {
      document.getElementById("gameResult").innerHTML =
        playersArray[0].name + " is the winner!";
      clearGameBoard(gameBoardArray);
    } else if (
      gameBoardArray[2] === "o" &&
      gameBoardArray[4] === "o" &&
      gameBoardArray[6] === "o"
    ) {
      document.getElementById("gameResult").innerHTML =
        playersArray[0].name + " is the winner!";
      clearGameBoard(gameBoardArray);
    } else if (
      gameBoardArray[0] === "x" &&
      gameBoardArray[1] === "x" &&
      gameBoardArray[2] === "x"
    ) {
      document.getElementById("gameResult").innerHTML =
        playersArray[1].name + " is the winner!";
      clearGameBoard(gameBoardArray);
    } else if (
      gameBoardArray[3] === "x" &&
      gameBoardArray[4] === "x" &&
      gameBoardArray[5] === "x"
    ) {
      document.getElementById("gameResult").innerHTML =
        playersArray[1].name + " is the winner!";
      clearGameBoard(gameBoardArray);
    } else if (
      gameBoardArray[6] === "x" &&
      gameBoardArray[7] === "x" &&
      gameBoardArray[8] === "x"
    ) {
      document.getElementById("gameResult").innerHTML =
        playersArray[1].name + " is the winner!";
      clearGameBoard(gameBoardArray);
    } else if (
      gameBoardArray[0] === "x" &&
      gameBoardArray[3] === "x" &&
      gameBoardArray[6] === "x"
    ) {
      document.getElementById("gameResult").innerHTML =
        playersArray[1].name + " is the winner!";
      clearGameBoard(gameBoardArray);
    } else if (
      gameBoardArray[1] === "x" &&
      gameBoardArray[4] === "x" &&
      gameBoardArray[7] === "x"
    ) {
      document.getElementById("gameResult").innerHTML =
        playersArray[1].name + " is the winner!";
      clearGameBoard(gameBoardArray);
    } else if (
      gameBoardArray[2] === "x" &&
      gameBoardArray[5] === "x" &&
      gameBoardArray[8] === "x"
    ) {
      document.getElementById("gameResult").innerHTML =
        playersArray[1].name + " is the winner!";
      clearGameBoard(gameBoardArray);
    } else if (
      gameBoardArray[0] === "x" &&
      gameBoardArray[4] === "x" &&
      gameBoardArray[8] === "x"
    ) {
      document.getElementById("gameResult").innerHTML =
        playersArray[1].name + " is the winner!";
      clearGameBoard(gameBoardArray);
    } else if (
      gameBoardArray[2] === "x" &&
      gameBoardArray[4] === "x" &&
      gameBoardArray[6] === "x"
    ) {
      document.getElementById("gameResult").innerHTML =
        playersArray[1].name + " is the winner!";
      clearGameBoard(gameBoardArray);
    } else if (turnTracker === 10) {
      document.getElementById("gameResult").innerHTML = "The game is a draw!";
      clearGameBoard(gameBoardArray);
    }
  };

  ////////////////////

  const clearGameBoard = (gameBoardArray) => {
    for (let i = 0; i < 9; i++) {
      gameBoardArray[i] = "";
    }
  };

  const restart = () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.innerHTML = "";
    });

    document.getElementById("gameResult").innerHTML = "";
    document.getElementById("player1").innerText = "";
    document.getElementById("player2").innerText = "";
    console.log(gameBoardArray);
    console.log(playersArray);
  };

  {
    return {
      gameBoard: gameBoardArray,
      changeCell,
      checkWinner,
      restart,
    };
  }
}

//players array

let playersArray = [];

const Player = (name, symbol) => {
  // player 1 = o
  // player 2 = X

  return { name, symbol };
};

const player1Input = document.getElementById("player1Input");

player1Input.addEventListener("click", function updatePlayer1Name() {
  let name = prompt("Type here");
  const player1 = Player(name, "O");
  playersArray.push(player1);
  console.log(playersArray);
  console.log(player1.name);
  document.getElementById("player1").innerText = player1.name + " is O's";
});

const player2Input = document.getElementById("player2Input");

player2Input.addEventListener("click", function updatePlayer1Name() {
  let name = prompt("Type here");
  const player2 = Player(name, "X");
  playersArray.push(player2);
  console.log(playersArray);
  document.getElementById("player2").innerText = player2.name + " is X's";
});

/////////////////////object to control the flow of the game

const gameControl = () => {
  var gameBoardFunctionVar = gameBoardFunction();

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", (event) => {
      handleClick(event);
    });
  });

  const handleClick = (event) => {
    let index = parseInt(event.target.id.split("-")[1]);
    let cellID = event.target.id;

    gameBoardFunctionVar.changeCell(index, cellID);
  };

  return {
    handleClick,
  };
};

//function to reset game

let gameBoardFunctionVar = gameBoardFunction();

const resetGameButton = document.getElementById("resetGame");

resetGameButton.addEventListener("click", () => {
  gameBoardFunctionVar.restart();
  turnTracker = 1;
});

gameControl();

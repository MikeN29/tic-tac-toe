//gameboard array

function gameBoardFunction() {
  let gameBoardArray = ["", "", "", "", "", "", "", "", ""];

  let turnTracker = 1;

  const changeCell = function (/*userSymbol,*/ index, cellID) {
    let cell = document.getElementById(cellID);

    console.log("childnode length = " + cell.childNodes.length);

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
    console.log(gameBoardArray);

    if (
      gameBoardArray[0] === "o" &&
      gameBoardArray[1] === "o" &&
      gameBoardArray[2] === "o"
    ) {
      //alert(`"O Wins ${player1}"`);
      document.getElementById("gameResult").innerHTML =
        player1.name + " is the winner!"; //undefined is the winner - is being printed. Stringafy?
    } else if (
      gameBoardArray[3] === "o" &&
      gameBoardArray[4] === "o" &&
      gameBoardArray[5] === "o"
    ) {
      alert("O Wins");
    } else if (
      gameBoardArray[6] === "o" &&
      gameBoardArray[7] === "o" &&
      gameBoardArray[8] === "o"
    ) {
      alert("O Wins");
    } else if (
      gameBoardArray[0] === "o" &&
      gameBoardArray[3] === "o" &&
      gameBoardArray[6] === "o"
    ) {
      alert("O Wins");
    } else if (
      gameBoardArray[1] === "o" &&
      gameBoardArray[4] === "o" &&
      gameBoardArray[7] === "o"
    ) {
      alert("O Wins");
    } else if (
      gameBoardArray[2] === "o" &&
      gameBoardArray[5] === "o" &&
      gameBoardArray[8] === "o"
    ) {
      alert("O Wins");
    } else if (
      gameBoardArray[0] === "o" &&
      gameBoardArray[4] === "o" &&
      gameBoardArray[8] === "o"
    ) {
      alert("O Wins");
    } else if (
      gameBoardArray[2] === "o" &&
      gameBoardArray[4] === "o" &&
      gameBoardArray[6] === "o"
    ) {
      alert("O Wins");
    } else if (
      gameBoardArray[0] === "x" &&
      gameBoardArray[1] === "x" &&
      gameBoardArray[2] === "x"
    ) {
      alert("X Wins");
    } else if (
      gameBoardArray[3] === "x" &&
      gameBoardArray[4] === "x" &&
      gameBoardArray[5] === "x"
    ) {
      alert("X Wins");
    } else if (
      gameBoardArray[6] === "x" &&
      gameBoardArray[7] === "x" &&
      gameBoardArray[8] === "x"
    ) {
      alert("X Wins");
    } else if (
      gameBoardArray[0] === "x" &&
      gameBoardArray[3] === "x" &&
      gameBoardArray[6] === "x"
    ) {
      alert("X Wins");
    } else if (
      gameBoardArray[1] === "x" &&
      gameBoardArray[4] === "x" &&
      gameBoardArray[7] === "x"
    ) {
      alert("X Wins");
    } else if (
      gameBoardArray[2] === "x" &&
      gameBoardArray[5] === "x" &&
      gameBoardArray[8] === "x"
    ) {
      alert("X Wins");
    } else if (
      gameBoardArray[0] === "x" &&
      gameBoardArray[4] === "x" &&
      gameBoardArray[8] === "x"
    ) {
      alert("X Wins");
    } else if (
      gameBoardArray[2] === "x" &&
      gameBoardArray[4] === "x" &&
      gameBoardArray[6] === "x"
    ) {
      alert("X Wins");
    } else if (turnTracker === 10) {
      alert("THe game is a draw!");
    }
  };

  {
    return {
      gameBoard: gameBoardArray,
      changeCell,
      checkWinner,
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
  document.getElementById("player1").innerText = player1.name;
});

const player2Input = document.getElementById("player2Input");

player2Input.addEventListener("click", function updatePlayer1Name() {
  let name = prompt("Type here");
  const player2 = Player(name, "X");
  playersArray.push(player2);
  console.log(playersArray);
  document.getElementById("player2").innerText = player2.name;
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

//function to render contents of gameBoard

function renderGameBoard() {
  var gameBoardVar = gameBoardFunction();

  // document.getElementById("cell-0").innerText = gameBoardVar.gameBoard.cell1;
  // document.getElementById("cell-1").innerText = gameBoardVar.gameBoard.cell2;
  // document.getElementById("cell-2").innerText = gameBoardVar.gameBoard.cell3;
  // document.getElementById("cell-3").innerText = gameBoardVar.gameBoard.cell4;
  // document.getElementById("cell-4").innerText = gameBoardVar.gameBoard.cell5;
  // document.getElementById("cell-5").innerText = gameBoardVar.gameBoard.cell6;
  // document.getElementById("cell-6").innerText = gameBoardVar.gameBoard.cell7;
  // document.getElementById("cell-7").innerText = gameBoardVar.gameBoard.cell8;
  // document.getElementById("cell-8").innerText = gameBoardVar.gameBoard.cell9;
}

gameControl();
renderGameBoard();

//need a restart game function

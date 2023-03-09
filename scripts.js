//gameboard array

function gameBoardFunction() {
  // cell1,
  // cell2,
  // cell3,
  // cell4,
  // cell5,
  // cell6,
  // cell7,
  // cell8,
  // cell9
  let gameBoardArray = {
    // cell1: "",
    // cell2: "",
    // cell3: "x",
    // cell4: "o",
    // cell5: "o",
    // cell6: "o",
    // cell7: "x",
    // cell8: "x",
    // cell9: "x",
  };

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
      checkWinner();
    } else if (cell.childNodes.length == 0 && turnTracker % 2 == 1) {
      turnTracker = turnTracker + 1;
      let userSymbol = "o";
      gameBoardArray[index] = userSymbol;
      console.log(gameBoardArray);
      document.getElementById(cellID).innerText = userSymbol;
      checkWinner();
    } else {
      alert("Choose a different cell!");
    }
  };

  //function to check winning condition

  const checkWinner = function () {
    console.log(gameBoardArray);
    if (
      (gameBoardArray = {
        0: "o",
        1: "o",
        2: "o",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
      })
    ) {
      alert("winner");
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

const Player = (name, symbol) => {
  //function giving an alert box, taking in player name and choice of symbol. only player 1 can choice symbol. Give player 2 the other symbol
  //assign these to an object as below

  return { name, symbol };
};

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

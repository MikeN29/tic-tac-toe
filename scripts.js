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

  const changeCell = function (userSymbol, index, cellID) {
    /*
    gameBoardArray[index] = userSymbol;

    console.log(gameBoardArray);

    document.getElementById(cellID).innerText = userSymbol;
*/

    let cell = document.getElementById(cellID);

    console.log("childnode length = " + cell.childNodes.length);

    if (cell.childNodes.length == 0) {
      gameBoardArray[index] = userSymbol;
      console.log(gameBoardArray);
      document.getElementById(cellID).innerText = userSymbol;
    } else {
      alert("Choose a different cell!");
    }
  };

  {
    return {
      gameBoard: gameBoardArray,
      changeCell,
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
    console.log(index);
    console.log(cellID);
    userTurn(index, cellID);
  };

  let turnTracker = 1;
  function userTurn(index, cellID) {
    if (turnTracker % 2 == 0) {
      turnTracker = turnTracker + 1;
      let userSymbol = "x";
      gameBoardFunctionVar.changeCell(userSymbol, index, cellID);
    } else {
      turnTracker = turnTracker + 1;
      let userSymbol = "o";
      gameBoardFunctionVar.changeCell(userSymbol, index, cellID);
    }
  }

  return {
    handleClick,
    userTurn,
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

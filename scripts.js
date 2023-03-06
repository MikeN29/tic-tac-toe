//gameboard array

function gameBoardFunction(
  cell1,
  cell2,
  cell3,
  cell4,
  cell5,
  cell6,
  cell7,
  cell8,
  cell9
) {
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
    gameBoardArray[index] = userSymbol;

    for (let i = 0; i < gameBoardArray.length; i++) {
      if (gameBoardArray[i] == index) {
        gameBoardArray[i] = userSymbol;
      }
    }

    console.log(gameBoardArray);

    document.getElementById(cellID).innerText = userSymbol;
  };

  /*below works
  const changeCell = function (userSymbol, cellID) {
    gameBoardArray.cell1 = userSymbol;

    console.log(gameBoardArray);

    console.log(`gameBoardArray.${cellID}`);
    document.getElementById("cell1").innerText = gameBoardArray.cell1; //this updates and works
  };*/

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

//object to control the flow of the game

const gameControl = () => {
  //basic set up: eventlisteners on each cell which lets you update the array contents with an alert popup. Either x or o
  //eventlisteners on each cell with a function linked which checks whos turn it is and updates the array contents with the correct symbol

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
    updateArray(index, cellID);
  };

  function updateArray(index, cellID) {
    let userSymbol = "x";

    gameBoardFunctionVar.changeCell(userSymbol, index, cellID);
  }

  return {
    handleClick,
  };
};

//function to render contents of gameBoard

function renderGameBoard() {
  var gameBoardVar = gameBoardFunction();

  //   document.getElementById("cell-0").innerText = gameBoardVar.gameBoard.cell1;
  //   document.getElementById("cell-1").innerText = gameBoardVar.gameBoard.cell2;
  //   document.getElementById("cell-2").innerText = gameBoardVar.gameBoard.cell3;
  //   document.getElementById("cell-3").innerText = gameBoardVar.gameBoard.cell4;
  //   document.getElementById("cell-4").innerText = gameBoardVar.gameBoard.cell5;
  //   document.getElementById("cell-5").innerText = gameBoardVar.gameBoard.cell6;
  //   document.getElementById("cell-6").innerText = gameBoardVar.gameBoard.cell7;
  //   document.getElementById("cell-7").innerText = gameBoardVar.gameBoard.cell8;
  //   document.getElementById("cell-8").innerText = gameBoardVar.gameBoard.cell9;
}

gameControl();
renderGameBoard();

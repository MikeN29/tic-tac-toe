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
    cell1,
    cell2,
    cell3: "x",
    cell4: "o",
    cell5: "o",
    cell6: "o",
    cell7: "x",
    cell8: "x",
    cell9: "x",
  };

  const changeCell = function (userSymbol, cellID) {
    let cell = "gameBoardArray" + cellID;

    //gameBoardArray.cell1 = userSymbol;
    `gameBoardArray.${cellID} = userSymbol`;
    console.log(gameBoardArray);
    //console.log(cell);
    console.log(`gameBoardArray.${cellID}`);
    //`document.getElementById("${cellID}").innerText = gameBoardArray.${cellID};`; //this updates and works
    document.getElementById(cellID).innerText = userSymbol;
    //document.getElementById("cellID").innerText = gameBoardArray.cell1; //this updates and works
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
      changeCellFunction: changeCell,
    };
  }
}

//var gameBoardVar = gameBoardFunction();

//players array

const Player = (name, symbol) => {
  //function giving an alert box, taking in player name and choice of symbol. only player 1 can choice symbol. Give player 2 the other symbol
  //assign these to an object as below

  return { name, symbol };
};

//object to control the flow of the game

function gameControlFunction() {
  //basic set up: eventlisteners on each cell which lets you update the array contents with an alert popup. Either x or o
  //eventlisteners on each cell with a function linked which checks whos turn it is and updates the array contents with the correct symbol
  var gameBoardVar = gameBoardFunction();

  document.getElementById("cell1").addEventListener("click", () => {
    //let cellID = "cell1";
    updateArray();
  });

  document.getElementById("cell2").addEventListener("click", (event) => {
    let cellID = event.target.id;
    console.log(cellID);
    updateArray(cellID);
  });

  function updateArray(cellID) {
    //update cell1

    let userSymbol = "x";

    gameBoardVar.changeCellFunction(userSymbol, cellID);
  }

  {
    return {};
  }
}

//function to render contents of gameBoard

function renderGameBoard() {
  var gameBoardVar = gameBoardFunction();

  //document.getElementById("cell1").innerText = gameBoardVar.gameBoard.cell1; // this doesnt work when cell1 value becomes 'x'
  document.getElementById("cell2").innerText = gameBoardVar.gameBoard.cell2;
  document.getElementById("cell3").innerText = gameBoardVar.gameBoard.cell3;
  document.getElementById("cell4").innerText = gameBoardVar.gameBoard.cell4;
  document.getElementById("cell5").innerText = gameBoardVar.gameBoard.cell5;
  document.getElementById("cell6").innerText = gameBoardVar.gameBoard.cell6;
  document.getElementById("cell7").innerText = gameBoardVar.gameBoard.cell7;
  document.getElementById("cell8").innerText = gameBoardVar.gameBoard.cell8;
  document.getElementById("cell9").innerText = gameBoardVar.gameBoard.cell9;
}

//renderGameBoard();
gameControlFunction();

// You’re going to store the gameboard as an array inside of a Gameboard object, so start there!
// Your players are also going to be stored in objects, and you’re probably going to want an object to control the flow of the game itself.

// Your main goal here is to have as little global code as possible. Try tucking everything away inside of a module or factory.
// Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.

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
    cell1: "x",
    cell2: "x",
    cell3: "x",
    cell4: "o",
    cell5: "o",
    cell6: "o",
    cell7: "x",
    cell8: "x",
    cell9: "x",
  };

  {
    return {
      gameBoard: gameBoardArray,
    };
  }
}

var gameBoardVar = gameBoardFunction();

console.log(gameBoardVar.gameBoard.cell1);
console.log(gameBoardVar.gameBoard.cell2);

//players array

const Player = (name, symbol) => {
  return { name, symbol };
};

//object to control the flow of the game

function gameControlFunction() {
  let gameControlArray = {};

  {
    return {
      gameControl: gameControlArray,
    };
  }
}

//function to render contents of gameBoard

function renderGameBoard() {
  var gameBoardVar = gameBoardFunction();

  document.getElementById("cell1").innerText = gameBoardVar.gameBoard.cell1;
  document.getElementById("cell2").innerText = gameBoardVar.gameBoard.cell2;
  document.getElementById("cell3").innerText = gameBoardVar.gameBoard.cell3;
  document.getElementById("cell4").innerText = gameBoardVar.gameBoard.cell4;
  document.getElementById("cell5").innerText = gameBoardVar.gameBoard.cell5;
  document.getElementById("cell6").innerText = gameBoardVar.gameBoard.cell6;
  document.getElementById("cell7").innerText = gameBoardVar.gameBoard.cell7;
  document.getElementById("cell8").innerText = gameBoardVar.gameBoard.cell8;
  document.getElementById("cell9").innerText = gameBoardVar.gameBoard.cell9;

  // for (let i = 0; i < gameBoardVar.gameBoard.length; i++) {
  //   document.getElementById(`"cell[${i}]"`).innerText =
  //     gameBoardVar.gameBoard.cell[i];
  // }
}

renderGameBoard();
//console.log(gameBoard);

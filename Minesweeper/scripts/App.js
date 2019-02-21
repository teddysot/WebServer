/*
Template App
(c) Copyright 2019 Scott Henshaw, In cooperation with VFS, All right reserved.
*/
import MineField from "./MineField.js";

"use strict";

// Derived from App class by Scott Henshaw, (C) 2019 VFS, All Rights Reserved
export default class App {
  constructor() {
    // App object oc control the UI of Minesweeper
    this.mineField;
    this.board = $(`#board`);
    this.initEventhandlers();
    this.firstClick = true;
    this.cellCount = 0;

    // Ready the timer and score counter

    // Hide the game screen and show the start splash
  }
  // check win
  checkWin() {
    let message = null;
    console.log("Cell count: " + this.cellCount);
    console.log("Minefield size: " + this.mineField.size);

    // [Diego] Cell clicked count + board size == all the cell numbers
    if (this.cellCount + this.mineField.size == (this.mineField.size * this.mineField.size)) {
      message = 'YOU WON!';
      alert(message);
    }
  }

  // Reset board
  resetBoard() {
    this.createBoard();
  }

  initEventhandlers() {
    // Difficulty Selection
    document.querySelector("#easy-menu").addEventListener("click", event => {
      this.difficulty(1);
    });

    document.querySelector("#medium-menu").addEventListener("click", event => {
      this.difficulty(2);
    });
    document.querySelector("#hard-menu").addEventListener("click", event => {
      this.difficulty(3);
    });

    // Disable drop down context menu
    this.board.bind("contextmenu", function (e) {
      e.preventDefault();
    });

    // Left click handler
    this.board.on("click", event => {
      this.handleCellClick(event);
    });

    // Right click handler
    this.board.on("contextmenu", event => {
      this.handleFlagClick(event);
    });
  }

  // Handle left click for cell
  handleCellClick(event) {
    let element = event.target;
    let elId = element.id;

    let col = Number(element.getAttribute("data-col"));
    let row = Number(element.getAttribute("data-row"));

    if (col != null && row != null && !$(element).hasClass("flag") && $(element).hasClass("cell")) {
      console.log("[CELL] Clicked: " + elId);

      if (this.firstClick) {
        this.firstClick = false;
        this.mineField.timer();
      }
      let cell = this.mineField.cellAt(row, col);
      if (cell.hasMine) {
        $(element).removeClass("cell").addClass("cellClicked").addClass("bomb");
        console.log("[CELL] " + row + "-" + col + " has a bomb: " + cell.hasMine);
        alert("You Lost");
      }
      else {
        console.log("[ADJCOUNT]" + this.mineField.field[row][col].adjacentMineCount);
        this.revealCell(row, col);
      }
    }
  }

  // Handle right click for flag
  handleFlagClick(event) {
    let element = event.target;
    let col = Number(element.getAttribute("data-col"));
    let row = Number(element.getAttribute("data-row"));

    console.log("[CLICK]" + row + col);
    if ($(element).hasClass("flag")) {
      $(element).removeClass("flag").addClass("cell");
      this.mineField.cellAt(row, col).setFlag();
    }
    else if (!$(element).hasClass("cellClicked")) {
      $(element).removeClass("cell").addClass("flag");
      this.mineField.cellAt(row, col).setFlag();
    }
  }

  // Difficulty Selection
  difficulty(choice) {
    let container = document.querySelector("#start-menu");
    container.innerHTML = "";

    if (choice == 1) {
      this.mineField = new MineField(10);
      console.log(1);
    } else if (choice == 2) {
      this.mineField = new MineField(20);
      console.log(1);
    } else if (choice == 3) {
      this.mineField = new MineField(30);
      console.log(1);
    }
  }

  // [Alli] check the adjacentMineCount and reveal the one that are 0
  revealCell(row, col) {
    let rowcol = "#c" + row + "-" + col;
    let cell = this.mineField.field[row][col];
    console.log(row, col);
    if (cell.revealed) {
      return;
    }

    if (cell.adjacentMineCount > 0) {
      $('' + rowcol).text(cell.adjacentMineCount);
      if (!$('' + rowcol).hasClass("cellClicked")) {
        this.cellCount++;
      }
      $('' + rowcol).removeClass("cell").addClass("cellClicked");
      this.checkWin();
      return;
    }

    if (cell.adjacentMineCount == 0) {
      cell.revealed = true;
      if (!$('' + rowcol).hasClass("cellClicked")) {
        this.cellCount++;
      }
      $('' + rowcol).removeClass("cell").addClass("cellClicked");
      this.checkWin();

      if (Number(col) - 1 >= 0) {
        if (Number(row) - 1 >= 0) {
          this.revealCell(Number(row) - 1, Number(col) - 1);
          this.revealCell(row - 1, col);
        }

        if (Number(row) + 1 < this.mineField.size) {
          this.revealCell(Number(row) + 1, Number(col) - 1);
          this.revealCell(Number(row) + 1, col);
          this.revealCell(row, Number(col) - 1);
        }
      }

      if (Number(col) + 1 < this.mineField.size) {
        if (Number(row) - 1 >= 0) {
          this.revealCell(Number(row) - 1, Number(col) + 1);
        }

        if (Number(row) + 1 < this.mineField.size) {
          this.revealCell(Number(row) + 1, Number(col) + 1);
          this.revealCell(Number(row), Number(col) + 1);
        }
      }
    }
  }
}

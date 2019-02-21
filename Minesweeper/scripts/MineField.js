import Cell from "./Cell.js";

"use strict";

export default class MineField {
  constructor(size) {
    this.size = size;
    this.timer;
    this.seconds;
    this.field = [];
    this.initEmptyField();
    this.renderMineField();
    this.initCell();
    this.generateBomb();
    this.updateAdjacentCounts();
    this.minesCount();
  }

  // Initialize empty field
  initEmptyField() {
    for (let i = 0; i < this.size; i++) {
      this.field[i] = [];
    }
  }
  
  // [Alex] timer and seconds should initialize in constructor
  timer() {
    var today = new Date();                                                                     //we get the exact time of when the table was pressed 
    this.time = setInterval(() => {                                                             //we create the timer
        var now = new Date().getTime();                                                         //we get the date and it will update each second
        var distance = now - today;                                                             //we substract the actual time from the time when the cell was pressed
        this.seconds = Math.floor((distance % (1000 * 1200)) / 1000);                           //calculating the ammount of seconds elapsed
        document.querySelector("#timer").innerHTML = `<h2>Timer: ${this.seconds}</h2>`;         //we print the seconds
    }, 1000);
  }

  minesCount() {
    let gameEl = document.querySelector("#mine-count");
    gameEl.innerHTML = `<h2>Mines: ${this.size}</h2>`;
  }

  // Generate mines to the cell
  generateBomb(size) {
    for (let i = 0; i < this.size; i++) {
      let x = Math.floor(Math.random() * this.size);
      let y = Math.floor(Math.random() * this.size);

      if (this.field[x][y].hasMine == true) {
        i--;
      }
      else {
        this.field[x][y].hasMine = true;
        console.log(x + " " + y);
      }
    }
  }

  // Generate board to html
  renderMineField() {
    // Generate HTML for each mine cell

    // Create a HTML Table for the cells
    let markup = `<table>`;
    for (let y = 0; y < this.size; y++) {
      markup += `<tr class="table-area table-border"></td>`;
      for (let x = 0; x < this.size; x++) {
        let cell = new Cell(x, y);
        this.field[x][y] = cell;
        markup += `<td id="c${x}-${y}" class="cell" data-row="${x}" data-col="${y}"></td>`;
      }
      markup += `</tr>`;
    }
    markup += `</table>`;

    // Insert the table into the app page
    let gameEl = document.querySelector("#board");
    gameEl.innerHTML = markup;

    this.resetMineField();
  }

  // Reset button
  resetMineField() {
    // Reset Button
    var btn = document.createElement(`button`); // Create a <button> element
    var t = document.createTextNode("RESET"); // Create a text node
    btn.addEventListener('click', event => {
      document.querySelector("#board").innerHTML = "";
      btn.remove();
      this.field = [];
      this.initEmptyField();
      this.renderMineField();
      this.initCell();
      this.generateBomb();
      this.updateAdjacentCounts();
    });
    btn.appendChild(t); // Append the text to <button>
    document.body.appendChild(btn); // Append <button> to <body>
  }

  // Initialize cells
  initCell() {
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        this.field.push(new Cell(x, y));
      }
    }
  }

  // Count adjacent cell around clicked cell
  updateAdjacentCounts() {
    for (let r = 0; r < this.size; r++) {
      for (let c = 0; c < this.size; c++) {
        let mineCount = 0;

        let minRow = r - 1;
        let maxRow = r;
        maxRow++;
        let minCol = c - 1;
        let maxCol = c;
        maxCol++;

        if (minRow <= 0) {
          minRow = r;
        }

        if (maxRow >= this.size) {
          maxRow = r;
        }

        if (minCol <= 0) {
          minCol = c;
        }

        if (maxCol >= this.size) {
          maxCol = c;
        }

        // Check bombs around the cell
        for (let x = minRow; x <= maxRow; x++) {
          for (let y = minCol; y <= maxCol; y++) {
            if (this.field[x][y].hasMine) {
              //console.log("[BOMB] " + x + " " + y);
              mineCount++;
            }
          }
        }
        this.field[r][c].adjacentMineCount = mineCount;
        //console.log("[ADJ] " + this.field[r][c].adjacentMineCount);
      }
    }
  }

  // Getter this field
  cellAt(row, col) {
    return this.field[row][col];
  }
}
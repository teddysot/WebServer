class App {
    constructor() {
        // App object oc control the UI of Minesweeper

        // Initialize the MineField 
        this.mineField = this.initMineField();
        
        this.myName = "Teddy";
        
        // Draw the MineField on the game screen
        this.renderMineField(15);

        document.querySelector('#submit-button')
            .addEventListener('click', event => {
                let username = document.querySelector('#name-input').value;

                let log = document.querySelector('#output').innerHTML;
                log += "User input: " + username;

                document.querySelector('#output').innerHTML = log;
            });

        document.querySelector('#wrapper')
            .addEventListener('click', event => {
                this.handleCellClick(event);
            });

        // Ready the timer and score counter

        // Hide the game screen and show the start splash
    }

    handleCellClick(event) {
        let element = event.target;
        let elId = event.target.id;

        let col = event.target.getAttribute("data-col");
        let row = event.target.getAttribute("data-row");

        // let cell = this.mineField.getCellAt(col, row);
        // if(cell.hasMine()) {...}
        Console.log("[CELL] Clicked: " + elId + this.myName);
    }

    initMineField() {
        // Create data structure for MineField
        let mineField = new MineField(15);

        // Randomize where the mines are, how many?
        mineField.randomizeMines();

        return mineField;
    }

    renderMineField(size = 10) {
        // Generate HTML for each mine cell

        // Create a HTML Table for the cells
        let markup = `<table class="some-styles">`;
        for (let i = 0; i < size; i++) {
            markup += `<tr class="table-area table-border">`;
            for (let j = 0; j < size; j++) {
                markup += `<td data-col="${i}" data-row="${j}" class="cell"></td>`;
            }
            markup += `</tr>`;
        }
        markup += `</table>`;

        // Insert the table into the app page
        let gameEl = document.querySelector("#wrapper");
        gameEl.innerHTML = markup;
    }
    run() {

    }
}
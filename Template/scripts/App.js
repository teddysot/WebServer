/*
Template App
(c) Copyright 2019 Scott Henshaw, In cooperation with VFS, All right reserved.
*/
'use strict';

// Derived from App class by Scott Henshaw, (C) 2019 VFS, All Rights Reserved
class App{

    constructor() 
    {
        // App object oc control the UI of Minesweeper

        // Initialize the MineField
        this.mineField = this.initMineField();

        // Draw the MineField on the game screen
        this.renderMineField();

        // Ready the timer and score counter

        // Hide the game screen and show the start splash
    }

    initMineField() 
    {
        // Create data structure for MineField
        let mineField = new MineField();

        // Randomize where the mines are, how many?
        mineField.randomizeMines();

        return mineField;
    }

    renderMineField() 
    {
        // Generate HTML for each mine cell

        // Create a HTML Table for the cells
        let markup = `<table>`;
        for(let i = 0; i < MAXROW; i++)
        {
            markup += `<tr class="table-area table-border"></td>`;
            for(let j = 0; j < MAXCOL; j++)
            {
                markup += `<td id="c${i}-${j}" class="cell"></td>`;
            }
            markup = `</tr>`;
        }
        markup += `</table>`;

        // Insert the table into the app page
        let gameEl = document.querySelector("#wrapper");
        gameEl.innerHTML = markup;
    }

    update() 
    {
        
    }

    render()
    {

    }

    run() 
    {
        // Every frame
            // update the simulation
            // render the results
    }
}
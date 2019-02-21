"use strict";

export default class Cell{
    constructor(  row = 0, col = 0 ) {

        this.flagged = false;
        this.hasMine = false;
        this.hasExploded = false;
        this.revealed = false;
        this.adjacentMineCount = 0;
    }

    // flagged = opposite
    setFlag(){
        this.flagged = !this.flagged;
        console.log(this.flagged);
    }
}
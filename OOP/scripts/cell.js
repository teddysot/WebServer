"use strict";

export default class Cell{
    constructor( position = { row: 0, col: 0} ) {
        // usage let c = new Cell();
        //       let c = new Cell( {row: 5, col: 3});
        //       let pos = { row: 4, col: 2 };
        //       let c = new Cell( pos );

        // Local scope stuff
       // this._private_ = {
       //     flagged: false,
       //     hasMine: false
        //}
        this.flagged = false;
        this.hasMine = false;
        this.adjacentMineCount = 0;

        // Object scope stuff
        this.position = {
            row = 0,
            col = 0
        };
    }

    //get flagged() { return this._private_.flagged}
    //set flagged( value ) { this._private_.flagged = value}
}
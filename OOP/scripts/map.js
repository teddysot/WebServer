"use strict";

import Cell from "./cell.js";

export default class Map{
    constructor( size = 10, mines = 20) {
        // Local scope stuff


        // Object scope stuff
        this.mineField = [];

        this.initEmptyMinefirld();
        this.placeMines();
        this.updateAdjacentCounts();

        for(let i = 0; i < size; i++){
            this.mineField[i] = [];
        }
    }

    initEmptyMinefirld();
    placeMines();
    updateAdjacentCounts();

    cellAt( row, col) {}
}
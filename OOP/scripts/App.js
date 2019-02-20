/*
Template App
(c) Copyright 2019 Scott Henshaw, In cooperation with VFS, All right reserved.
*/
'use strict';

import Map from "./map.js";
import Cell from "./cell.js";

// Derived from App class by Scott Henshaw, (C) 2019 VFS, All Rights Reserved
export default class App{

    constructor() {
        var a = 5;
        var b = "hello";

        const aThing = {
            attrib1: "Hi",
            attrib2: "there",
            attrib3: 42
        }
        
        aThing.attrib3 = 56;
        aThing.attrib4 = 16.5;

        this.mapData = new Map();

        this .initEventhandlers();

    }

    initEventhandlers(){

        // Left click handler
        document.querySelector("#some-thing")
        .addEventListener("click", event => {

            let currentCell = this.mapData.cellAt( row, col);
            let lastState = currentCell.flagged;
            currentCell.flagged = true;

            event.target.classList.add("flag");
        });

        // Right click handler
        document.querySelector("#some-thing")
        .addEventListener("context-menu", event => {

            event.preventDefault();

            // do my code here..
        });
    }
}
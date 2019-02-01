/*
MineField Object Class
(c) Copyright 2019 Scott Henshaw, In cooperation with VFS, All right reserved.
*/
'use strict';

class MineField {
    constructor(maxRows) {
        this.field = [];
        for (let i = 0; i < maxRows; i++) {
            this.field[i] = [];
        }
    }

    randomizeMines() { }
}
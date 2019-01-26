/*
MineField Object Class
(c) Copyright 2019 Scott Henshaw, In cooperation with VFS, All right reserved.
*/
'use strict';

const MAXROW = 10;
const MAXCOL = 10;

class MineField
{
    constructor( maxRows = MAXROW, maxCols = MAXCOL)
    {
        this.field = [];
        for(let i = 0; i < maxRows; i++)
        {
            this.field[i] = [];
        }
    }

    randomizeMines()
    {}
}
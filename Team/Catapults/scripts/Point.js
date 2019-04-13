/**
 *   Entity Controller Class
 *
 *   Treat a DOM element as a rigid body in a box2D world
 *   The prime goal of this class is to manage the updates between this
 *   model in the physics sim and the DOM element on screen
 *
 *   @Copyright 2017, Vancouver Film School.  All Rights Reserved.
 */
'use strict';

import {Physics} from '../lib/Physics.js';

// X, Y are world coordinates, top, left are screen coordinates
export default class Point {
    constructor( top = 0, left = 0) {
        this.__private__ = { top, left }
    }
    // let a= new Point();

    // let b = a.x;
    get x() { return this.__private__.left / Physics.WORLD_SCALE; }
    get y() { return  -1 * this.__private__.top / Physics.WORLD_SCALE; }

    // let b = a.x;
    set x( value ) { this.__private__.left = value * Physics.WORLD_SCALE; }
    set y( value ) { this.__private__.top = -1 * value * Physics.WORLD_SCALE; }

    // b = a.top;
    get top() { return this.__private__.top; }
    get left() { return this.__private__.left; }

    // a.top = 6;
    set top( value ) { this.__private__.top = value; }
    set left( value ) { this.__private__.left = value; }
}

/*const levelData = {
    someStuff: "yea yea yea",
    entityList: [{
        id:         0,
        name:       "Metal Crate",
        height:     70,
        width:      70,
        texture:    "images/metalCenter.png",
        mass:       90,
        bounce:     0,
        friction:   1,
        hitPoints:  4
    },
    {
        id:         1,
        name:       "Metal Crate",
        height:     70,
        width:      70,
        texture:    "images/metalCenter.png",
        mass:       90,
        bounce:     0,
        friction:   1,
        hitPoints:  4
    }]
}*/
/* Copyright 2019 Scott Henshaw */
'use strict';

import Box2DPhysics from './lib/Physics.js';

const TIMESTEP = 1/60;
const VELOCITY = 10;
const POSITION = 10;

export default class WorldController {

    contructor( $gameArea ) {
        
        let gravityV2 = new Box2DPhysics.Vec2(0, Physics.GRAVITY );
        this.model = new Box2DPhysics.World( gravityV2 );
        this.$view = $gameArea;

        let view = {
            width: this.$view.width(),
            height: this.view.height()
        };

        // Now take the Width and Height and create some static Physics Rigid bodies
        // to form the boundaries of our game
        this.createBoundaries( view );
    }

    createBoundaries( extents ){

    }

    update( deltaT ){
        this.model.Step( TIMESTEP, VELOCITY, POSITION);
    }

    render( deltaT){

    }
}
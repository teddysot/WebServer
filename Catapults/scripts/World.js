/* Copyright 2019 Scott Henshaw */
'use strict';

import Physics from './lib/Physics.js';
import RigidBody from './RigidBody.js';

const WORLD = {

    TIMESTEP: 1/60,

    STEP: {
        VELOCITY: 10,
        POSITION: 10,
    },

    WALL: {
        DENSITY: 2,
        FRICTION: 0.9,
        BOUNCINESS: 0.75
    }

}

export class WorldController {

    contructor( $gameArea ) {
        
        let gravityV2 = new Physics.Vec2(0, Physics.GRAVITY );
        this.model = new Physics.World( gravityV2 );
        this.$view = $gameArea;

        let view = {
            width: this.$view.width(),
            height: this.$view.height()
        }
        
        // Now take the Width and Height and create some static Physics Rigid bodies
        // to form the boundaries of our game
        this._createBoundaries( view.width, view.height );
    }

    // Building a box out of rigid bodies statically placed to "contain" our projectiles
    _createBoundaries( width, height ){

        // Left, Right and Bottom Wall from width, height as screen dimentions
        const UNIT = 1;
        const MID = { 
            x: width / 2 / Physics.WORLD_SCALE,  // Screen to World
            y: height / 2 / Physics.WORLD_SCALE  // Screen to World
        }
        const LOC = { 
            x: width / Physics.WORLD_SCALE,      // Screen to World 
            y: height / Physics.WORLD_SCALE      // Screen to World
        }
        this._createWall( LOC.x, LOC.y, LOC.x, UNIT ); // Ground (x, y, w, h)
        this._createWall( 0,     MID.y, UNIT,  LOC.x ); // Left Wall
        this._createWall( LOC.x, MID.y, UNIT,  LOC.y ); // Right Wall
    }

    _createWall( x, y, w, h) {

        // TODO: finish the RigidBody
        return new RigidBody()
        .location( x, y )
        .dimentions( w, h )
        .fixture( WORLD.WALL.DENSITY, WORLD.WALL.FRICTION, WORLD.WALL.BOUNCINESS )
        .static()
        .create( this.model ); // create and attach to this world
    }

    update( deltaT ){
        this.model.Step( WORLD.TIMESTEP, WORLD.STEP.VELOCITY, WORLD.STEP.POSITION );
    }

    render( deltaT){

    }
}
/* Copyright 2019 Scott Henshaw */
'use strict';

import {Physics} from '../lib/Physics.js';
import RigidBody from './RigidBody.js';

const PLAYER = {

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

export default class Player {

    constructor( $gameArea ) {
        
        let gravityV2 = new Physics.Vec2(0, Physics.GRAVITY );
        this.model = new Physics.World( gravityV2 );
        this.$view = $gameArea;

        let view = {
            width: this.$view.width,
            height: this.$view.height
        }
        
        this.createPlayer();
        this.MovementHandler(event);
    }

    createPlayer()
    {
        $(`#editor-wrapper`).append(
            `<div class="player"></div>`
        );

        return new RigidBody()
        .location( $(`.player`).position())
        .dimentions(100, 100)
        .fixture( PLAYER.WALL.DENSITY, PLAYER.WALL.FRICTION, PLAYER.WALL.BOUNCINESS )
        .dynamicBody()
        .create( this.model );
    }

    MovementHandler(event)
    {
        $('.player').draggable();
    }

    update( deltaT ){
        this.model.Step( PLAYER.TIMESTEP, PLAYER.STEP.VELOCITY, PLAYER.STEP.POSITION );
    }

    render( deltaT){
    }
}
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

import PHYSICS from './lib/Physics.js';
import RigidBody from './RigidBody.js';
import Point from '../Catapults/scripts/Point.js';
import { Physics } from '../Catapults/lib/Physics.js';

// t();

//  iforce2d.net
//  box2dflash.org

/*
 * Entity Controller
 */
export default class Entity {

    constructor( worldCtrl, $view, staticBody = false ) {

        // this is our world controller, the one we are a part of (parent)
        this.world = worldCtrl;

        // this is our dom element to manage -- the VIEW
    	this.$view = $view;
        this.$view.css({'left':'0px', 'top':'0px'});   //Reset DOM object position for use with CSS3 positioning

        // The Box2D Rigid Body "model" we are managing -- the MODEL
        let pt = new Point( $view.left(), $view.top());
    	this.model = this.createModel( pt, staticBody );
        this.model.userData = {
            domObj: this.$view,
	        width:  this.width,
	        height: this.height
        }
    }

    applyImpulse( degrees, power ) 
    {
        let angle = degrees * Physics.DEG_2_RAD;
        let impulseV2 = new Physics.Vec2( Math.cos( angle ) * power, Math.sin( angle ) * power);
        let centerV2 = this.model.GetWorldCenter();


        this.model.applyImpulse( impulseV2, ceneterV2);
    }

    applyForce( degrees, power ) {}

    setDensity( density ) {}

    update( opts = undefined ) {
        // Update this object based on supplied position/rotation data

		//Retrieve positions and rotations from the Box2d world
    }

    render() {
        // Draw/move this objects element based on its position
        
        //Retrieve positions and rotations from the Box2d world
        
        let pt = new Point( this.model.m_xf.position.x, this.model.m_xf.position.y );

        // rotation about which point ??? ( raidans ==> degrees ) 
        let r  = Math.floor(((this.model.m_sweep.a + Physics.TWO_PI) % Physics.TWO_PI) * PHYSICS.RAD_2_DEG);

        //CSS3 transform does not like negative values or infitate decimals
        let css = {'transfrom' : `translate(${pt.left}px, ${pt.top}px) rotate(${r}deg)`};
    }

    createModel( thePoint, staticBody ) {  // TODO: Use the RigidBody class to encapsulate this.

        let rigid = new RigidBody()
            .location( thePoint.x, thePoint.y)
            .dimentions( this.width / PHYSICS.WORLD_SCALE, this.height / PHYSICS.WORLD_SCALE )
            .fixture( 4, 0.7, 0.2 );    // TODO: future, get these from the level data...

        if (staticBody)
            rigid.static();

        rigid.create( this.world.model );

        return rigid.body;
    }
}




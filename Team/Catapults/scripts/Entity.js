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
import RigidBody from './RigidBody.js';
import Point from "./Point.js";

/*
 * Entity Controller
 */
export default class Entity {

    constructor( worldCtrl, $view, staticBody = false ) {

        // this is our world controller, the one we are a part of (parent)
        this.world = worldCtrl;

        // this is our dom element to manage -- the VIEW
    	this.view = $($view);
        this.view.css({'left':'0px', 'top':'0px'});   //Reset DOM object position for use with CSS3 positioning
        // The Box2D Rigid Body "model" we are managing -- the MODEL
        let p = new Point( this.view.left, this.view.top );
    	this.model = this.createModel( p, staticBody );
        this.model.bodyDefn.userData = {
            domObj: this.view,
	        width:  $view.width,
	        height: $view.height
        }
    }

    applyImpulse( degrees, power ) {
        let angle = degrees * Physics.DEG_2_RAD;
        let impulseV2 = new Physics.Vec2( Math.cos( angle ) * power, Math.sin( angle ) * power);
        let centerV2 = this.model.GetWorldCenter();

        this.model.ApplyImpulse( impulseV2, centerV2 );
    }

    applyForce( degrees, power ) {}

    setDensity( density ) {}

    update( opts = undefined ) {
        // Update this object based on supplied position/rotation data
        this.view.css({top: this.model.bodyDefn.position.x, left: this.model.bodyDefn.position.y, position:'relative'});
        //Retrieve positions and rotations from the Box2d world
        
    }

    setImage(Type, Name, Height, Width, Texture, Shape, Friction, Mass, Restitution){
        this.view.html = `<div id="addedItem"
        class="item"
        data-type="${Type}"
        data-name="${Name}"
        data-height="${Height}"
        data-width="${Width}"
        data-texture="${Texture}"
        data-shape="${Shape}"
        data-friction="${Friction}"
        data-mass="${Mass}"
        data-restitution="${Restitution}"
        style="background-image: url(${Texture}); width: ${Width}px; height: ${Height}px;" >
        </div>`;

        $('#library-wrapper ul').append(this.view.html);
    }

    getModel(){
        return this.model;
    }

    render() {
        // Draw/move this objects element based on its position
        
        //Retrieve positions and rotations from the Box2d world
        let p = new Point( this.model.model.m_xf.position.x, this.model.model.m_xf.position.y );
        
        // rotation about which point ??? (radians => degrees)
        let r = Math.floor(((this.model.model.m_sweep.a + Physics.TWO_PI) % Physics.TWO_PI) * Physics.RAD_2_DEG);
        
        //CSS3 transform does not like negative values or infitate decimals
        let css = {'transform': `translate(${p.left}px,${p.top}px) rotate(${r}deg)`};
        this.view.css( css );
    }

    createModel( thePoint, staticBody ) {  // TODO: Use the RigidBody class to encapsulate this.

        let rigid = new RigidBody()
            .location( thePoint.x, thePoint.y )
            .dimentions( this.view.width / Physics.WORLD_SCALE, this.view.height / Physics.WORLD_SCALE )
            .fixture( 4, 0.7, 0.2 ); // future, get these from the level data...

        if (staticBody)
            rigid.static();

        rigid.create( this.world.model );

        return rigid;
    }
}




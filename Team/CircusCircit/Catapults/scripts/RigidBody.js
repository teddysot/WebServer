 /* Copyright 2019 Scott Henshaw */
'use strict';

import {Physics} from "../lib/Physics.js";

export default class RigidBody {
    constructor( width, height ) {
        // RigidBody
        this.bodyDefn = new Physics.BodyDef;

        // Fixture
        this.fixtureDefn = new Physics.FixtureDef;

        // Shape -- set the dimentions, assume all are polygons
        this.fixtureDefn.shape = new Physics.PolygonShape;
        this.bodyDefn.type = Physics.Body.b2_dynamicBody;

    }

    userData(dom, w, h){
        this.bodyDefn.userData = {
            domObj: dom,
	        width:  w,
	        height: h
        };

        return this;
    }

    location( x, y) {

        this.bodyDefn.position.x = x;
        this.bodyDefn.position.y = y;

        return this; // Chaining requires this.
    }
    dimentions( w, h ) {

        this.fixtureDefn.shape.SetAsBox( w , h );

        return this;
    }
    fixture(density, friction, bounciness ) {

        this.fixtureDefn.density = density;     // Density = area * mass
        this.fixtureDefn.friction = friction;    // 1 - sticky, 0 = slippery
        this.fixtureDefn.restitution = bounciness; // 1 = very bouncy, 0 = no bounce

        return this;
    }
    staticBody() {
        
        this.bodyDefn.type = Physics.Body.b2_staticBody;

        return this;
    }
    dynamicBody() {
        return this;
    }
    create( worldModel ) {
        

        // Actually create the rigid body
        this.model = worldModel.CreateBody( this.bodyDefn );
        this.model.CreateFixture( this.fixtureDefn );

        // Call me last
    }
}
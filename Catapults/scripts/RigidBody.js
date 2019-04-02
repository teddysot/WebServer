/* Copyright 2019 Scott Henshaw */
'use strict';

import Physics from "../lib/Physics.js";

class RigidBody {
    constructor( width, height ) {
        // BOX2D/PHYSICS

        // RigidBody
        this.bodyDef = new Physics.BodyDef;

        // Fixture
        this.fixtureDefn = new Physics.FixtureDef;

        // Shape -- set the dimentions, assume all are polygons
        this.fixtureDefn.shape = new Physics.PolygonShape;
        this.bodyDef.type = Physics.Body.b2_dynamicBody;

    }
    location( x, y) {

        this.bodyDef.position.x = x;
        this.bodyDef.position.y = y;

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
        
        this.bodyDef.type = Physics.Body.b2_staticBody;

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
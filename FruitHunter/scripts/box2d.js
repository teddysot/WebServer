/*
box2d docs at http://www.box2dflash.org/docs/2.1a/reference/
*/
'use strict';



class PhysicsLib {

	constructor() {

		// Alias' for functions from Box2D
		this.b2Vec2 = Box2D.Common.Math.b2Vec2;
		this.b2AABB = Box2D.Collision.b2AABB;
	
		this.b2BodyDef =    Box2D.Dynamics.b2BodyDef;
		this.b2Body =       Box2D.Dynamics.b2Body;
		this.b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
		this.b2Fixture =    Box2D.Dynamics.b2Fixture;
		
		this.b2World = Box2D.Dynamics.b2World;
		
		this.b2MassData =    Box2D.Collision.Shapes.b2MassData;
		
		this.b2PolygonShape =	 Box2D.Collision.Shapes.b2PolygonShape;
		this.b2CircleShape =	 Box2D.Collision.Shapes.b2CircleShape;
		this.b2DebugDraw =	 Box2D.Dynamics.b2DebugDraw;
		this.b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef;
		this.b2Shape =        Box2D.Collision.Shapes.b2Shape;
	
		this.b2RevoluteJointDef =	 Box2D.Dynamics.Joints.b2RevoluteJointDef;
		this.b2Joint =            Box2D.Dynamics.Joints.b2Joint;
		this.b2PrismaticJointDef = Box2D.Dynamics.Joints.b2PrismaticJointDef;
		this.b2ContactListener =  Box2D.Dynamics.b2ContactListener;
	
		this.b2Settings =	Box2D.Common.b2Settings;
		this.b2Mat22 =	Box2D.Common.Math.b2Mat22;
	
		this.b2EdgeChainDef = Box2D.Collision.Shapes.b2EdgeChainDef;
		this.b2EdgeShape =   Box2D.Collision.Shapes.b2EdgeShape;
	
		this.b2WorldManifold = Box2D.Collision.b2WorldManifold;

		this.setSpeed();
	}

	setSpeed() {
		//max speed = 10 mps for higher velocity
		this.b2Settings.b2_maxTranslation = 10.0;
		this.b2Settings.b2_maxRotation = 50.0;
	}

	createBox( world, x, y, width, height, options ) {
		//default setting
		options = $.extend(true, {
			'density' : 1.0 ,
			'friction' : 1.0 ,
			'restitution' : 0.0 ,
			
			'linearDamping' : 0.0 ,
			'angularDamping' : 0.0 ,
			
			'gravityScale' : 1.0 ,
			'type' : this.b2Body.b2_dynamicBody , 
			
			'fixedRotation' : false ,
		}, options);
		
		var body_def = new this.b2BodyDef();
		var fix_def = new this.b2FixtureDef();
		
		fix_def.density = options.density;
		fix_def.friction = options.friction;
		fix_def.restitution = options.restitution;
		
		fix_def.shape = new this.b2PolygonShape();
		
		//user specific data
		fix_def.userData = options.userData;
		
		//important! this takes half the width
		fix_def.shape.SetAsBox( width /2 , height /2 );
		
		body_def.position.Set(x , y);
		body_def.linearDamping = options.linearDamping;
		body_def.angularDamping = options.angularDamping;
		
		body_def.type = options.type;
		body_def.fixedRotation = options.fixedRotation;
		
		var b = world.CreateBody( body_def );
		var f = b.CreateFixture(fix_def);
		
		return b;
	}

	//Generic function to draw a box2d body , with a given shape on a given context
	drawShape( game, body , shape, context ) {

		context.strokeStyle = '#000';
		context.lineWidth = 1;
		let scale = game.scale;
		
		context.fillStyle = "#ccc";
		
		context.beginPath();
		switch (shape.GetType()) 
		{
			//A polygon type shape like a square , rectangle etc
			case this.b2Shape.e_polygonShape:			
				let vert = shape.GetVertices();
				let position = body.GetPosition();
				//b2Math.MulMV(b.m_xf.R , vert[0]);
				
				let tV = position.Copy();
				let a = vert[0].Copy();
				a.MulM( body.GetTransform().R );
				
				tV.Add(a);
				
				let _v = game.get_offset( tV );
				
				let _x = _v.x;
				let _y = _v.y;
				
				context.moveTo( _x * scale, _y * scale );
				
				for (let i = 0; i < vert.length; i++) {
					//Get a copy of the vertice
					let v = vert[i].Copy();
					
					//Rotate the vertice
					v.MulM( body.GetTransform().R );
					
					v.Add(position);
					
					//Subtract the camera coordinates to get relative offsets
					let _v = game.get_offset(v);
					
					let _x1 = _v.x;
					let _y1 = _v.y;

					//Draw line to the new point
					context.lineTo( _x1 * scale , _y1  * scale);
				}
				context.lineTo(_x * scale, _y * scale);			
				break;

			default:
				break;
		}
		
		context.fill();
		context.stroke();
	}

	//Draw a body by drawing all the shapes of its fixtures
	drawBody( game, body, context ) {
		let c_x = body.GetWorldCenter().x;
		let c_y = body.GetWorldCenter().y;
		
		for (let f = body.GetFixtureList() ; f != null ; f = f.GetNext()) {
			let shape = f.GetShape();
			
			//draw the shape finally
			this.drawShape( game, body , shape , context );
		}
	}
}

/**
	1. Initialise the box2d objects
	2. Code for class inheritance
*/
export const Physics = new PhysicsLib();



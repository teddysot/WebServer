/*
	Fruit Hunter Game - Player Object
	Made using Box2d and Jquery on the Html5 Canvas element
	
    Original code by : Silver Moon (m00n.silv3r@gmail.com)
    Adaptation to ES8 modules and classes by Scott Henshaw (shenshaw@vfs.com)   
	
	Enjoy!!
*/
'use strict';

import { Asset } from './init.js';
import { Physics } from './box2d.js';


/*
Player object monkey art from
http://www.vickiwenderlich.com/2011/06/game-art-pack-monkey-platformer/
*/
export class Player {

    constructor(options) {

		this.height = 1.0;
		this.width = 0.66;
		
		this.x = options.x;
		this.y = options.y;
		this.game = options.game;
		this.age = 0;
			
		this.do_move_left = false;
		this.do_move_right = false;
		this.max_hor_vel = 2;
		this.max_ver_vel = 4;
		this.can_move_up = true;
		
		var info = { 
			'density':       10,
			'fixedRotation': true,
			'userData':      this,
			'type':          Physics.b2Body.b2_dynamicBody,
			'restitution':   0.0,
		};
		
		var body = Physics.createBox( this.game.box2d_world , this.x, this.y, this.width, this.height, info );
		this.body = body;
		this.img = Asset.load('monkey.png');
	}

	update() {
		if (this.is_out()) {
			//turn off the game
			this.game.on = false;			
			this.game.restart();
		}
		
		if(this.do_move_left) { 
			this.add_velocity(new Physics.b2Vec2(-1,0));
		}
		
		if(this.do_move_right) {
			this.add_velocity(new Physics.b2Vec2(1,0));
		}
		
		if(this.do_move_up && this.can_move_up) {
			
			this.add_velocity(new Physics.b2Vec2(0,6));
			this.can_move_up = false;
		}
		
        this.age++;
        //this.img = Asset.load('monkey.png');
	}

	add_velocity( vel ) {

		var b = this.body;
		var v = b.GetLinearVelocity();
		
		v.Add(vel);
		
		//check for max horizontal and vertical velocities and then set
		if (Math.abs(v.y) > this.max_ver_vel) {
			v.y = this.max_ver_vel * v.y/Math.abs(v.y);
		}
		
		if (Math.abs(v.x) > this.max_hor_vel) {
			v.x = this.max_hor_vel * v.x/Math.abs(v.x);
		}
		
		//set the new velocity
		b.SetLinearVelocity( v );
	}

	render() {
		if (this.body == null)
			return false;
		
		//Physics.drawBody( this.game, this.body, this.game.ctx );
		
		let c = this.game.get_offset( this.body.GetPosition() );
		let scale = this.game.scale;
		let sx = c.x * scale;
		let sy = c.y * scale;
		
		let width = this.width * scale;
		let height = this.height * scale;
		
		this.game.ctx.translate( sx, sy );
		this.game.ctx.drawImage( this.img, -width / 2, -height / 2, width, height );
		this.game.ctx.translate(-sx, -sy );
	}

	jump() {
		//if player is already in vertical motion, then cannot jump
		if (Math.abs( this.body.GetLinearVelocity().y ) > 0.0)
			return false;
		
		this.do_move_up = true;
	}

	is_out() {
		//if player has fallen below the 0 level of y axis in the box2d coordinates, then he is out
		if (this.body.GetPosition().y < 0)
			return true;
		
		return false;
	}
}


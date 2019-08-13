/*
	Fruit Hunter Game - Wall object
	Made using Box2d and Jquery on the Html5 Canvas element
	
    Original code by : Silver Moon (m00n.silv3r@gmail.com)
    Adaptation to ES8 modules and classes by Scott Henshaw (shenshaw@vfs.com)   
	
	Enjoy!!
*/
'use strict';

import { Asset } from './init.js';
import { Physics } from './box2d.js';

export class Wall {

    constructor( options ) {

		this.x = options.x;
		this.y = options.y;
		
		this.height = options.height;
		this.width = options.width;
		
		this.game = options.game;
		this.age = 0;
		//create a box2d static object - one that does not move, but does collide with dynamic objects
		
		let info = { 
			'density':       10 ,
			'fixedRotation': true ,
			'userData':      this ,
			'type':          Physics.b2Body.b2_staticBody ,
		};
		
		let body = Physics.createBox( this.game.box2d_world , this.x, this.y, this.width, this.height, info );
		this.body = body;
		this.img = Asset.load('wall.png');
	}

	update() {
		this.age++;
	}

	//Draw bricks
	render() {
		//draw_body(this.body, this.game.ctx);
		
		let x1 = this.x - this.width/2;
		let x2 = this.x + this.width/2;
		
		let y1 = this.y + this.height/2;
		let y2 = this.y - this.height/2;
		
		let scale = this.game.scale;
		
		let width = 1.0 * scale;
		let height = 1.0 * scale;
		
        this.img = Asset.load('wall.png');
		for(let i = x1 ; i < x2; i++) {

			for(let j = y1; j > y2; j--) {

				//get canvas coordinates
				let c = this.game.get_offset( new Physics.b2Vec2( i, j ) );
				this.game.ctx.drawImage( this.img, c.x * scale, c.y * scale, width, height );
			}
		}
	}
}
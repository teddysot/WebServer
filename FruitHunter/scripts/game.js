/*
	Fruit Hunter Game
	Made using Box2d and Jquery on the Html5 Canvas element
	
    Original code by : Silver Moon (m00n.silv3r@gmail.com)
    Adaptation to ES8 modules and classes by Scott Henshaw (shenshaw@vfs.com)   
	
	Enjoy!!
*/
'use strict';

import { Asset } from './init.js';
import { Physics } from './box2d.js';

import { Wall } from   './wall.js';
import { Apple } from  './apple.js';
import { Player } from './player.js';

const KEY = {
	LEFT:  37,
	UP:    38,
	RIGHT: 39,
	A:     65,
	W:     87,
	D:     68,
    SPACE: 32
}

export class Game {

	constructor() {
		this.fps = 60;
		this.scale = 50;
		
		//global array of all objects to manage
		this.game_objects = [];
		
		this.points = 0;
		this.to_destroy = [];
		this.time_elapsed = 0;
	}

	resize() {

		let canvas = this.canvas;
		
		//Set the canvas dimensions to match the window dimensions
		let w = $(window).outerWidth();
		let h = $(window).outerHeight();
		
		canvas.width(w);
		canvas.height(h);
		
		canvas.attr('width' , w * 0.75);
		canvas.attr('height' , h * 0.75);
		
		this.canvas_width = canvas.attr('width');
		this.canvas_height = canvas.attr('height');
		
		this.screen_height = 10;
		this.scale = this.canvas_height / this.screen_height;
		this.screen_width = this.canvas_width / this.scale;
	}

	setup() {

		let $canvas = $('#canvas');
		let ctx = this.ctx = $canvas.get(0).getContext('2d');
		this.canvas = $canvas;
		
		//resize to correct size
		this.resize();
		
		//dimensions in metres
		let w = this.screen_width;
		let h = this.screen_height;
			
		//create the box2d world
		this.create_box2d_world();
		
		//lower slab
		this.game_objects.push( new Wall({ x: w/2 - 3.5, y: 1, width: 2, height: 1, game: this }));
		this.game_objects.push( new Wall({ x: w/2,       y: 1, width: 2, height: 1, game: this }));
		this.game_objects.push( new Wall({ x: w/2 + 3.5, y: 1, width: 2, height: 1, game: this }));
		
		//the player
		this.player = new Player({ x: w/2, y: h/2, game: this });
		this.game_objects.push(this.player);
		
		//attach event handlers for key presses
		this.start_handling();
		
		//setup collision handler too
		this.setup_collision_handler();
	}

	create_box2d_world() {
		//10m/s2 downwards, cartesian coordinates remember - we shall keep slightly lesser gravity
		let gravity = new Physics.b2Vec2( 0, -10 );
		
		/*
		very important to do this, otherwise player will not move.
		basically dynamic bodies trying to slide over static bodies will go to sleep
		*/
		let doSleep = false;
		this.box2d_world = new Physics.b2World( gravity, doSleep );
	}

	//Start the game :) Setup and start ticking the clock
	start()	{
		this.on = true;
		this.total_points = 0;
		
		this.setup();
		this.is_paused = false;
		
		//Start the Game Loop - TICK TOCK TICK TOCK TICK TOCK TICK TOCK
		this.update();
	}

	restart() {

		// clean up all the old physics objects before restarting
		for (let element of this.game_objects) {
			this.box2d_world.DestroyBody( element.body );
		}
		this.game_objects.length = 0;  // clobber the existing game objects, let the GC collect it up.		
		Physics.setSpeed();            // Reset the speed values
		this.start();
	}

	redraw_world() {
		//1. clear the canvas first - not doing this will cause tearing at world ends
		this.ctx.clearRect( 0 , 0 , this.canvas_width , this.canvas_height );
		
		//dimensions in metres
		let w = this.screen_width;
		let h = this.screen_height;
		
		let img = Asset.load('orange_hills.png');
		this.ctx.drawImage( img, 0 , 0 , this.canvas_width, this.canvas_height );
		
		img = Asset.load('tree.png');
		this.ctx.drawImage( img,  (w/2 - 4.5) * this.scale , h/2 , 10 * this.scale, this.canvas_height );
		
		Asset.write({ x: 25, y: 25, font:'bold 15px arial', color:'#fff', text:'Fruits '+ this.points, ctx: this.ctx });
		
		//Draw each object one by one , the tiles , the cars , the other objects lying here and there
		for(let i in this.game_objects)
		{
			this.game_objects[i].render();
		}
	}

	update( count )	{

		if (!this.is_paused && this.on) {
			
			this.time_elapsed += 1;
			
			//create a random fruit on top
			if(this.time_elapsed % 50 == 0) {

				let xc = Math.random() * 8 + this.screen_width/2 - 4;
				let yc = this.screen_height/2 + 2.5;
				
				this.game_objects.push( new Apple({ x: xc, y: yc, game: this }));
			}
			
			//tick all objects, if dead then remove
			for (let i in this.game_objects)	{

				if (this.game_objects[i].dead == true) {

					delete this.game_objects[i];
					continue; // bad...
				}
				
				this.game_objects[i].update();
			}
			
			//garbage collect dead things
			this.perform_destroy();
			
			//Step the box2d engine ahead
			this.box2d_world.Step(1/20 , 8 , 3);
			
			//important to clear forces, otherwise forces will keep applying
			this.box2d_world.ClearForces();
			
			//redraw the world
			this.redraw_world();
			
			if(!this.is_paused && this.on) {

				// [SH] Convert to requestAnimationFrame
				//game.fps times in 1000 milliseconds or 1 second
				this.timer = setTimeout( () => { 

					this.update(); 
				}, 1000/this.fps);
			}
		}
	}

	perform_destroy() {

		for (let i in this.to_destroy) {

			this.to_destroy[i].destroy();
		}
	}

	get_offset( vector ) {

		return new Physics.b2Vec2( vector.x - 0, Math.abs( vector.y - this.screen_height ));
	}

	start_handling() {

		$(document).on('keydown.game', event => {
			this.key_down( event );
			return false;
		});
		
		$(document).on('keyup.game', event => {
			this.key_up( event );
			return false;
		});
	}

	key_down( event ) {
		
		switch ( event.keyCode ) {
			case KEY.LEFT:
			case KEY.A:
				this.player.do_move_left = true;
				break;
		
			case KEY.UP:
			case KEY.W:
			case KEY.SPACE:
				this.player.jump();
				break;
		
			case KEY.RIGHT:
			case KEY.D:
				this.player.do_move_right = true;
				break;

			default:
				// do nothing
				break;
		}
	}

	key_up( event )	{
		
		switch ( event.keyCode ) {
			case KEY.LEFT:
			case KEY.A:
				this.player.do_move_left = false;
				break;

			case KEY.UP:
			case KEY.W:
			case KEY.SPACE:
				this.player.do_move_up = false;
				this.player.can_move_up = true;
				break;

			case KEY.RIGHT:
			case KEY.D:
				this.player.do_move_right = false;
				break;

			default:
				// do nothing
				break;
		}
	}

	//Setup collision handler
	setup_collision_handler() {
		
		//Override a few functions of class b2ContactListener
		Physics.b2ContactListener.prototype.BeginContact = ( contact ) => {
			//now come action time
			let a = contact.GetFixtureA().GetUserData();
			let b = contact.GetFixtureB().GetUserData();
			if (a instanceof Player && b instanceof Apple) {

				this.destroy_object( b );
				this.points++;
			}
			
			else if (b instanceof Player && a instanceof Apple) {

				this.destroy_object( a );
				this.points++;
			}
			//apple hits a wall
			else if (a instanceof Apple && b instanceof Wall)
			{
				this.destroy_object( a );
			}
		}
	}

	//schedule an object for destruction in next tick
	destroy_object( obj ) {
		this.to_destroy.push( obj );
	}
}	
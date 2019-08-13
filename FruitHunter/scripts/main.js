/*
	Fruit Hunter Game
	Made using Box2d and Jquery on the Html5 Canvas element
	
    Original code by : Silver Moon (m00n.silv3r@gmail.com)
    Adaptation to ES8 modules and classes by Scott Henshaw (shenshaw@vfs.com)   
	
	Enjoy!!
*/
'use strict';

import { Game } from './game.js';

$(document).ready( event => {

	let game = new Game();
	
	//store game pointer in a global object
	//global_game = game;	
	$(window).resize( event => { game.resize();	});
	game.start();
});
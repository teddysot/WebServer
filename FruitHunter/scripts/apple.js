/*
	Fruit Hunter Game - Apple Object
	Made using Box2d and Jquery on the Html5 Canvas element
	
    Original code by : Silver Moon (m00n.silv3r@gmail.com)
    Adaptation to ES8 modules and classes by Scott Henshaw (shenshaw@vfs.com)   
	
	Enjoy!!
*/
'use strict';

import { Asset } from './init.js';
import { Physics } from './box2d.js';

export class Apple {
    
    constructor( options ) {
        this.height = 0.25;
        this.width = 0.25;
        this.x = options.x;
        this.y = options.y;
        
        this.game = options.game;
        
        var linear_damping = 10 - (parseInt(this.game.points / 10) + 1)*0.5;
        
        var info = { 
            'density' : 10 ,
            'linearDamping' : linear_damping ,
            'fixedRotation' : true ,
            'userData' : this ,
            'type' : Physics.b2Body.b2_dynamicBody ,
        };
        
        var body = Physics.createBox( this.game.box2d_world , this.x, this.y, this.width, this.height, info );
        this.body = body;
        this.img = Asset.load('apple.png');
    }

    render() {
        
        if (this.body == null)
            return false;
        
        //draw_body(this.body, this.game.ctx);       
        let c = this.game.get_offset( this.body.GetPosition() );
        
        let scale = this.game.scale;
        
        let sx = c.x * scale;
        let sy = c.y * scale;
        
        let width = this.width * scale;
        let height = this.height * scale;
        
        this.game.ctx.translate( sx, sy );
        this.game.ctx.drawImage( this.img , -width / 2, -height / 2, width, height );
        this.game.ctx.translate( -sx, -sy );
    }

    update() {

        this.age++;
        
        //destroy the apple if it falls below the x axis
        if (this.body.GetPosition().y < 0) {
            this.game.destroy_object(this);
        }
    }

    //Destroy the apple when player eats it
    destroy() {

        if (this.body == null)
            return;
        
        this.body.GetWorld().DestroyBody( this.body );
        this.body = null;
        this.dead = true;
    }
}
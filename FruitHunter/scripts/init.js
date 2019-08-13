'use strict';

export class Asset {
	/* 
	Load image from asset manager 
	Asset.img_res( path )
	*/
	static load( path ) {

		let i = new Image();
		i.src = 'images/'+path;
		
		return i;
	}

	/* Generic function to write text 
	example :
		Asset.write_text( options );
		
		where options = { 
			x : game.canvas_width - 100 , 
			y : game.canvas_height - 50 , 
			font : 'bold 35px arial' , 
			color : '#fff' , 
			text : time , 
			ctx : game.ctx
		}
	*/
	static write( options ) {
		var x = options.x;
		var y = options.y;
		var font = options.font;
		var color = options.color;
		var text = options.text;
		var ctx = options.ctx;
	
		ctx.save();
		if ('shadow' in options)	{

			ctx.shadowColor = options.shadow.color;
			ctx.shadowOffsetX = options.shadow.x;
			ctx.shadowOffsetY = options.shadow.y;
			ctx.shadowBlur = options.shadow.blur;
		}
		
		ctx.font = font;
		/*ctx.textAlign = 'center';*/
		ctx.fillStyle = color;		
		if ('align' in options)	{

			ctx.textAlign = options.align;
		}	
		ctx.fillText( text , x , y);
		ctx.restore();
	}
}

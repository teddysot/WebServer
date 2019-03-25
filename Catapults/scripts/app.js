/* Copyright 2019 Scott Henshaw */
'use strict';

export default class App {
    constructor() {
        // Initialize everything
        $('#level-data-form').on('submit', event => this.doSave( event ));
        $('#new-level-btn').on('click', event => { });
        $('#save-as-level-btn').on('click', event => { });
        $(".item").each((i, el) => this.dragHandler($(el)));
		$(".droppedItem").each((i, el) => this.droppedHandler($(el)));
        this.dropHandler($('#editor-wrapper'));
    }

    dragHandler($el) {
			$el.draggable({
				revert: "invalid",
				opacity: 0.5,
				helper: "clone",
				appendTo: "#editor-wrapper"
			});
	}
	
	droppedHandler($el) {
		$el.draggable({
			opacity: 0.5,
		});
	}

    dropHandler($el){
        if($el.hasClass("droppedItem")){
			$el.droppable({
				accept: ".droppedItem",
				hoverClass: "drop-hover",
			})
		}
		else{
			$el.droppable({
                accept: ".item",
                hoverClass: "drop-hover",
                drop: (event, ui) => {
                    let dropped = $(ui.draggable).clone();
					dropped.draggable();
					dropped.addClass("droppedItem");
                    $el.append(dropped);
                }
            });
		}
    }

    /*
    get_level_list - Loads a level or object back from the server

    @param: appid=username
    @param: name=filename
    @param: payload=JSONString
    
    */

    doSave(event) {
        event.preventDefault();
        /*
        SAVE
        @param: userid=username
        @param: name=filename
        @param: datatype='object/level'
        @param: payload=JSONString
        */
        let request = this.saveRequest();
        $.post('http://pgwm.vfs.local/cle/save/', request)
            .then(dataAsString => {
                // Register a callback to handle the response
                let response = $.parseJSON( dataAsString );

                if(response.payload.length == 0){
                    return;
                }

                if(!response.error){
                    return;
                }
            });
    }

    doLoad( event ) {
        event.preventDefault();
        /*
        LOAD
        @param: userid=username
        @param: name=filename
        @param: datatype='object/level'
        @param: payload=JSONString
        */
    }

    saveRequest() {

        // Form a save action command
        // let formData = $('level-data-form').serialize();
        // generates: "levelName="level-1"&"collidables="10"&"ammoCount"="10"&"backgroundName"="background"

        let formDataObj = $('#level-data-form').serializeArray();
        /*
            generates:
            {
                levelName:      "level-1",
                collidables:    10,
                ammoCount:      10,
                backgroundName: "background"
            }
        */
       
       // Add the level data to the params
       let theLevel = this.levelDataFromLevel( formDataObj );

        // Add params for the level to save
        let levelDataToSave = {
            userid: 'pg15teddy',
            name: 'level-1',
            datatype: 'level',
            payload: theLevel
        };


        // Send the message to the server and
        // http://pgwm.vfs.local/
        // POST http://pgwm.vfs.local/cle/index.php?action=save&name=pg15teddy&name=level-1&datatype=level&payload=???
        //      BETTER BELOW...
        // POST http://pgwm.vfs.local/cle/save/?name=pg15teddy&name=level-1&datatype=level&payload=???

        return $.params( levelDataToSave );
    }

    levelDataFromLevel() {
        return "";
    }
}
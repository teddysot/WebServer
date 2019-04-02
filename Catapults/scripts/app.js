/* Copyright 2019 Scott Henshaw */
'use strict';

export default class App {
    constructor() {
        // Initialize everything
        
        // Drag handler for items
        $(".item").each((i, el) => this.dragHandler(el));

        // Add button
        $('#add-obstacle-btn').on('click', event => {
            $('.input-bg-modal').css({
                display: "flex"
            });
        });
        $('.input-close').on('click', event => {
            $('.input-bg-modal').css({
                display: "none"
            });
        });
        $('#add-image-btn').on('click', event => this.addImageBtn(event));

        // Save/Load
        $('#save-level-btn').on('click', event => {this.doSave(event)});
        $('#load-level-btn').on('click', event => { this.doLoad(event) });
        $('#new-level-btn').on('click', event => { });

        // Test Console Log Button
        $('#testConsole').on('click', event => {});
    }

    addImageBtn(el) {
        // Get all the attribute data
        let Type = $('#type').val();
        let Name = $('#name').val();
        let Height = $('#height').val();
        let Width = $('#width').val();
        let Texture = $('#texture').val();
        let Shape = $('#shape').val();
        let Friction = $('#friction').val();
        let Mass = $('#mass').val();
        let Restitution = $('#restitution').val();

        // Generate html code
        $('#library-wrapper ul').append(
            `<div id="addedItem" 
            class="item"
            data-type="${Type}"
            data-name="${Name}"
            data-height="${Height}"
            data-width="${Width}"
            data-texture="${Texture}"
            data-shape="${Shape}"
            data-friction="${Friction}"
            data-mass="${Mass}"
            data-restitution="${Restitution}"
            style="background-image: url(${Texture}); width: ${Width}px; height: ${Height}px;" >
            </div>`
        );
        
        // Add Drag Handler
        this.dragHandler("#addedItem");

        // Close window
        $('.input-bg-modal').css({
            display: "none"
        });
    }

    dragHandler(el) {
        if ($(el).hasClass("droppedItem")) {
            $(el).draggable();

            // Add dropped item click handler for editing style
            $('.droppedItem').on('click', event => {
                $('.edit-bg-modal').css({
                    display: "flex"
                });
            });
            
            // Close window handler
            $('.edit-close').on('click', event => {
                $('.edit-bg-modal').css({
                    display: "none"
                });
            });
            this.dropHandler('.item');
        }
        else {
            $(el).draggable({
                revert: "invalid",
                opacity: 0.5,
                helper: "clone",
                appendTo: "#editor-wrapper"
            });
            this.dropHandler('#editor-wrapper');
        };
    }

    dropHandler(el) {
        if ($(el).hasClass("droppedItem")) {
            $(el).droppable({
                hoverClass: "drop-hover",
            })
        }
        else {
            $(el).droppable({
                accept: ".item",
                hoverClass: "drop-hover",
                drop: (event, ui) => {
                    let dropped = $(ui.draggable).clone();
                    dropped.addClass("droppedItem");
                    $(el).append(dropped);
                    this.dragHandler(dropped);
                    ui.helper.remove();
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

                console.log(request);
                console.log(dataAsString);
                console.log(JSON.stringify(dataAsString));
                // Register a callback to handle the response
                let response = $.parseJSON(dataAsString);

                console.log(response);

                if (response.payload.length == 0) {
                    return;
                }

                if (!response.error) {
                    return;
                }
            });
    }

    doLoad(event) {
        event.preventDefault();
        /*
        LOAD
        @param: userid=username
        @param: name=filename
        @param: datatype='object/level'
        @param: payload=JSONString
        */
       
        // Send a request ask for my level
       $.post('http://pgwm.vfs.local/CLE/get_level_list/', 'pg15teddy')
       .then(dataAsString => {
           //console.log(dataAsString);
           // serialize back the string to an array
           let response = JSON.parse(dataAsString);
           console.log(response);
       })
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
        let theLevel = this.levelDataFromLevel();
        
        // Add params for the level to save
        let levelDataToSave = {
            userid: 'pg15teddy',
            name: formDataObj[0].value,
            type: 'level',
            payload: theLevel
        };

        console.log($.param(levelDataToSave));


        // Send the message to the server and
        // http://pgwm.vfs.local/
        // POST http://pgwm.vfs.local/cle/index.php?action=save&name=pg15teddy&name=level-1&datatype=level&payload=???
        //      BETTER BELOW...
        // POST http://pgwm.vfs.local/cle/save/?name=pg15teddy&name=level-1&datatype=level&payload=???
        //console.log($.param(levelDataToSave));

        // $.param for serialize string for a server
        return $.param(levelDataToSave);
    }

    // Get all the data in the editor-wrapper
    levelDataFromLevel() {
        let leveldata = [];
        $("#editor-wrapper").children().each( (i, el) => {
            let data = {
                'pos': $(el).position(),
                'type': $(el).attr("data-type"),
                'name': $(el).attr("data-name"),
                'height': $(el).attr("data-height"),
                'width': $(el).attr("data-width"),
                'texture': $(el).attr("data-texture"),
                'shape': $(el).attr("data-shape"),
                'friction': $(el).attr("data-friction"),
                'mass': $(el).attr("data-mass"),
                'restitution': $(el).attr("data-restitution"),
            }
            /*
            Type
            Name
            Height
            Width
            Texture
            Shape
            Friction
            Mass
            Restitution
            */
           leveldata.push(data);
        });
        console.log(leveldata);
        return leveldata;
    }
}
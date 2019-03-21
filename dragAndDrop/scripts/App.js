/*
Draggable Demo App

#Copyright (C) 2019 Scott Henshaw, All Rights reserved
*/

'use strict';

export default class App {
    constructor() {

        $('.items').each( (i, el) => this.addDragHandlers($(el)));
        this.addDropHandlers($('#editor'));
    }

    addDragHandlers( $element ) {
        $element
        .on("dragstart", event => {
            // Pull together data for offset to send
            let dragData = {
                dx: event.offsetX,
                dy: event.offsetY,
                id: `#${event.target.id}`
            }
            let someData = JSON.stringify( dragData );
            event.originalEvent.dataTransfer.setData("text/plain", someData);
        })
        .on("drag", event => {})
        .on("dragend", event => {});
    }

    addDropHandlers( $dropTarget ) {
        $dropTarget
        .on("dragenter", event => {})
        .on("dragover", event => {
            event.preventDefault();
            $('.items').css({'cursor':'move'});
        })
        .on("drop", event => {
            let xferData = event.originalEvent.dataTransfer.getData("text/plain");
            // Extract offset data do tell where to set final position
            let dragData = JSON.parse( xferData );

            let $movedDiv = $(dragData.id);

            let editorPos = $dropTarget.offset();
            $movedDiv.offset({ left: event.clientX - dragData.dx, top: event.clientY - dragData.dy });
            //$dropTarget.append( $newDiv );

            // Set the css for the top, left position
        });
    }
}
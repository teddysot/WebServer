'use strict';

class AdminApp {
    constructor() {
        // the local object contains all the private members used in this class             
        this.__private__ = {
            playerList: [],
            done: false
        };

        this.populatePlayerList(); 
        
    }

    run() {      
        // update something
        // render something
    }

    async save() {

    }

    async populatePlayerList() {
        let m = this.__private__;
        
    	// Post request for data to the server (assuming GAE server)
        let instr = $.param({'cmd':'get_player_data'});
        let data = await $.post( '/', instr );
                
        let result = this.resultFromData( data );
        if (result.returnCode === 0) {

            // use the data inside result, each member will match the dictionary
            // from the server
            m.playerList = result.players;

        } else if (result.returnCode === 99) {

            // handle error returned by the server
            window.location = '/';
            return;        
        }
    }

    resultFromData( data ) {

        let result = null; 
        switch (typeof data) {
            case 'string':
                result = $.parseJSON( data );
                break;
                
            case 'object':
                result = data;
                break;
            
            default:
                result = null; 
                break;
        }
        return result;
    }
}

// Main
$(document).ready(event => {

    let app = new AdminApp();
    event.preventDefault();
});
/**
 * App Singleton MAIN 
 * 
 * @copyright: (C) 2014-2016 Kibble Games Inc in cooperation with Vancouver Film School. All Rights Reserved. 
 * @author: Scott Henshaw {@link mailto:shenshaw@vfs.com} 
 * @version: 1.2.0 
 * 
 * @summary: Framework Singleton Class to contain a web app
 * 
 */
'use strict';

// Introduce a "namespace"
var vfs = {	
	__private__: new WeakMap()
};


// Constants
const SECONDS_AS_MS = 1000;   
const TARGET_FPS = 60;
const TARGET_MS_PER_TICK = SECONDS_AS_MS / TARGET_FPS;
const UPDATE_MIN_MS = 2000;


// Define the App Controller
export default class App {

    constructor() {
        
        // Do some initialization of the member variables for the app
        let my = this.__private__ = {
            done:   false,
            userId: 0
	    };
	    
        // Define the Event handlers for the app
        $('#nickname-form').on('submit', event => {            
            event.preventDefault();
            
            // Do your thing here when the user presses the submit button on this form.           
            let requestParams = $(event.target).serialize();            
            $.post('server/login/', requestParams)
                .then( jsonResponse => {                    
                    // this callback is triggered WHEN we get a response                        
                    var response = $.parseJSON( jsonResponse );
                    
                    if (!response.error) {                        

                        my.userId = response.id;
                        $('#results-area').html(`Welcome ${response.nick-name}, ${response.msg} <br/>`);
                    }
                });
        });
        
        $("#validate-form").on('submit', event => {            
            /*
             Note the calls in the handler MUST use the app class to 
             reference the post/response calls so that they can be 
             resolved at run time
             */
            event.preventDefault();
            
            let requestParams = $(event.target).serialize();
            
            // Note: the trailing slash IS important
            $.post('server/validate/', requestParams )                
                .then( jsonResponse => {                     
                    // this callback is triggered WHEN we get a response                        
                    let response = $.parseJSON( jsonResponse );
                    
                    // compose the view markup based on JSON data we recieved
                    let markup = "Favorite beverage: " + response.favorite_beverage;
                    markup += "<br />Favorite restaurant: " + response.favorite_restaurant;
                    markup += "<br />Gender: " + response.gender;
                    markup += "<br />JSON: " + response.json;
            
                    // Display the markup in the result section
                    $("#results-area").html( markup );
            
                    // Pop an alert to let the user know that the result is computed
                    console.log(`Form submitted successfully.\nReturned json: ${response.json}` );                    
                });
            return false;
        });
	}	    
    
	update() {
        // Update the app/simulation model
    	// is the app finished running?
    	let my = this.__private__;
    	my.done = true;
    }
        	
    render() { 
        // Refresh the view - canvas and dom elements
    }        
	
	run() {
        // Run the app
	    // One way to make private things easier to read as members
        let my = this.__private__;
				
        this.update();			
        this.render();						
	}		
}  // Run the unnamed function and assign the results to app for use.

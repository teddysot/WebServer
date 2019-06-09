
/*
Node.js serve for Quizshow
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
*/

'use strict';

const Express = require('express')
//const Path = require('path')
const BodyParser = require('body-parser')
const CORS = require('cors')
const UsersTable = require('./api/UsersTable.js');

const App = Express();

App.use( Express.static('public') );
App.use( BodyParser.json() );
App.use( CORS() );

const port = process.env.Port || 3000;


// ======================Post APIs============================


App.post('/api/player', (request, response) => {
    // do something with an AJAX request to this edge
    //let playerId = request.params.id;
    // fetch stuff from the database.
    // UsersTable.readById( playerId )
    // .then( theUser=> {
    //     response.json(theUser);
    // })
    /*.catch( error => {
        // couldn't find by id, go create one...
        UsersTable.create()
        .then(data => {
            
        })
    })*/
});


// Start server here...
App.listen(port, ()=> {
    //console.log(`Server running on port ${port}`)
})
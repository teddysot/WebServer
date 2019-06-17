
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

App.use(Express.static('public'));
App.use(BodyParser.json());
App.use(CORS());

const port = process.env.Port || 3000;


// ======================Post APIs============================

// Call this api on login.
/**
 * returns ->
 * 
 *  payload = 
 * 
    * {
    *      exitcode: 0 for success 1 for error.
    * 
    *      role: role of the user (int)      404 = error | 0 = board | 1 = player | 2 = host
    *      id:   id of the user. (int)       404 = error | < or > 404 = user id
    *      name: name of the user. (string) "404"= error | "<name>" 
    * }
 */

App.post('/api/evalplayer', (request, response) => {
    
    let userTable = new UsersTable();   // Create the db bridge

    // Assemble the payload to be used
    let payload = {

        exitcode: 0,

        role: request.body.role,
        id: request.body.id,
        name: request.body.name,

    }

    // Check if the player exists first


    userTable.readByNickname(payload.name).then(results => {
        
        payload.exitcode = 0;
        payload.id = results[0].User_Id
        payload.name = results[0].User_Name

        response.json(payload);
        
    }).catch(error=>{payload.exitcode = 1});
});

App.post('/api/getusername', (request, response) => {

    let usersTable = new UsersTable();
    let user = {
        payload: "Scott"
    }

    usersTable.readById(1)
        .then(results => {
            user.payload = `${results[0].User_Name}`;
            response.json(user);
        })
        .catch(error => {console.log(error)});
});


// Start server here...
App.listen(port, () => {

    // eslint-disable-next-line no-console
    console.log(`Server running on port ${port}`);
})

    // ===================== TEMPLATES =======================

    // Basic server call

    // App.post('/api/<apiurl>', (request, response) => {
    //     let payload = {
    //      <payload details>
    //     }
    
 
    //      response.json(payload);
    // });

    // Player tempalate
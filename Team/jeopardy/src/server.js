/* eslint-disable no-console */

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
const QuestionsTable = require('./api/QuestionsTable');
const BundlesTable = require('./api/BundlesTable.js')
const CategoriesTable = require('./api/CategoriesTable.js')
const GamesTable = require('./api/GamesTable.js');

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
    * 
    *      data: extra data fields.
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

        data: null,

    }

    // Check if the player exists first.
    userTable.readByNickname(payload.name).then(results => {
        
        // if there's no user under that name
        if(results.length <= 0)
        {
            // create it
            userTable.create(payload.name).then(results =>{
               
                // afterwards get it again
                userTable.readByNickname(payload.name).then(results => {
                    
                    // then build the payload
                    payload.exitcode = 0;
                    payload.id = results[0].User_ID;
                    payload.name = results[0].User_Name;
                    payload.playerid = results[0].Player_ID;
                    payload.data = results;

                    // then return it.
                    response.json(payload);
                });

            });
        }
        
        // If the player is found, build the payload and return it.

        payload.exitcode = 0;
        payload.id = results[0].User_ID;
        payload.name = results[0].User_Name;
        payload.playerid = results[0].Player_ID;
        payload.data = results;

        response.json(payload);

    }).catch(error=>{payload.exitcode = 1});

});

App.post('/api/creategame', (request, response) => {
    let gameTable = new GamesTable();

    gameTable.create(request.body.bundle).then(results => {
        response.json(results);
    }).catch(error => { payload.exitcode = 1 });
});

App.post('/api/bundlelist', (request, response) => {

    let bundleTable = new BundlesTable();

    let bundle = {
        count: 1,
    }

    bundleTable.getAllBundles().then(results => {
        bundle.count = results.length;
    })

    response.json(bundle);
});

App.post('/api/categorylist', (request, response) => {

    let categoryTable = new CategoriesTable();

    let bundle = {
        categoryList: [0, 1, 2, 3, 4]
    }

    categoryTable.getCategoryList(request.body.id).then(results => {
        for (let index = 0; index < results.length; index++) {
            bundle.categoryList[index] = results[index].Category_ID;
        }
        response.json(bundle);
    })
});

App.post('/api/category', (request, response) => {

    let categoryTable = new CategoriesTable();


    categoryTable.getCategory(request.body.id).then(results => {
        response.json(results[0].Category_Title);
    })
});

/**
 * returns ->
 * 
 * payload =
 * 
    * {
    *      
    *      roleid: user's role to be set to
    *      id:     the user who's role is to be changed
    * 
    *      data: extra data that the request has.
    *  
    * 
    * }
 */
App.post('/api/updaterole', (request, response) => {

    let userTable = new UsersTable();   // Create the db bridge
    
    let payload = {

        roleid: request.body.roleid,
        id: request.body.id,

        data: null

    }

    userTable.updateUserRole(payload.roleid, payload.id).then( data =>{
        payload.data = data;
        response.json(payload);
    }).catch(error=>{console.log("Error on update role")});
});

App.post('/api/getquestions', (request, response) => {

    let questionsTable = new QuestionsTable();
    
    let payload = 
    {
        data: null
    }

    questionsTable.readAllQuestions().then( data => {
        
        payload.data = data;
        response.json(payload);

    }).catch(error => {console.log("Error On Get Q by Category")});
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
        .catch(error => {console.log("error on get username")});
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
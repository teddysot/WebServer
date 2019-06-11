
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

App.post('/api/createuser', (request, response) => {
    let userTable = new UsersTable();

    let payload = {
        exitcode: 0,
        name: request.body.name,
    }

    userTable.create(payload.name).then(results => {
        payload.exitcode = 0;
        response.json(payload);
    }).catch(error=>{payload.exitcode = 1});
});

App.post('/api/questionbyserver', (request, response) => {
    let question = {
        payload: "Scott Henshaw!",
    }

    response.json(question);
});

// App.post('/api/question', (request, response) => {

//     //TODO: Make Question Table Not create yet !!
//     let questionTable = new QuestionTable();

//     let question = {
//         payload: "Question"
//     }

//     questionTable.readById(1)
//         .then(results => {
//             question.payload = `${results[0].question}`;
//             response.json(question);
//         })
//         .catch(error => {console.log(error)});
// });

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


/**
 *     // do something with an AJAX request to this edge
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
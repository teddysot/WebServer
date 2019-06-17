
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
const QuestionsTable = require('./api/QuestionsTable.js')
const BundlesTable = require('./api/BundlesTable.js')
const CategoriesTable = require('./api/CategoriesTable.js')
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
    }).catch(error => { payload.exitcode = 1 });
});

App.post('/api/questionbyserver', (request, response) => {
    let question = {
        payload: "Scott Henshaw!",
    }

    response.json(question);
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

// Teddy
App.post('/api/question', (request, response) => {

    //TODO: Make Question Table Not create yet !!
    let questionTable = new QuestionsTable();

    let question = {
        id: request.body.id,
        title: "title",
        answer: "answer",
        value: 100,
    }

    questionTable.readById(question.id)
        .then(results => {
            question.id = `${results[0].Question_ID}`;
            question.title = `${results[0].Question}`;
            question.answer = `${results[0].Answer}`;
            question.value = `${results[0].Value}`;
            response.json(question);
        })
        .catch(error => { console.log(error) });
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
        .catch(error => { console.log(error) });
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
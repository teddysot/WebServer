
/*
MySQL Table Accessor for the Users TAble for Quizshow
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
*/

'use strict';
const DB = require('./DatabaseConnection.js') ;

class QuestionsTable {

    create(data) {

        return new Promise((resolve, reject) => {

            // connect to the db
            DB.connect().then(conn => {
                //do some query
                conn.query(`INSERT INTO user_accounts(User_Name) values ('${data}')`)
                .then((results, error, fields) => {
                    if (error) return reject(error);
                    resolve(results);
                });
                DB.disconnect();
            })
            .catch(error => {reject(error)});
            // disconnect

        });

    }

    readByQuestionId(id) {

        return new Promise((resolve, reject) => {
            // connect to the db
            DB.connect()
            .then(conn => {
                // do some query
                conn.query(`SELECT * from questions where Question_ID=${id}`)

                .then((results, error, fields) => {
                    // resolve/respond
                    if (error) return reject(error);
                    resolve(results);
                });
                DB.disconnect();
            })
            .catch(error => { reject(error); });
        });
    }

    readAllQuestions()
    {
        return new Promise((resolve, reject) => {
            // connect to the db
            DB.connect()
            .then(conn => {
                // do some query
                conn.query(`SELECT * from questions`)

                .then((results, error, fields) => {
                    // resolve/respond
                    if (error) return reject(error);
                    resolve(results);
                });
                DB.disconnect();
            })
            .catch(error => { reject(error); });
        });
    }

    readByCategoryId(id) {

        return new Promise((resolve, reject) => {
            // connect to the db
            DB.connect()
            .then(conn => {
                // do some query
                conn.query(`SELECT * from questions where Category_ID=${id}`)

                .then((results, error, fields) => {
                    // resolve/respond
                    if (error) return reject(error);
                    resolve(results);
                });
                DB.disconnect();
            })
            .catch(error => { reject(error); });
        });
    }

    update(data) {
        // db.query( `UPDATE users SET nickname = '%${data.nickname}%' , '%${data.email}%' WHERE id=${data.id}`)
        // .then(...)
    }

    delete(id) { }
}

module.exports = QuestionsTable;

/*
MySQL Table Accessor for the Users TAble for Quizshow
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
*/

'use strict';
const DB = require('./DatabaseConnection.js') ;

class UsersTable {

    create(data) {

        return new Promise((resolve, reject) => {

            // connect to the db

            // // do some query
             DB.query('INSERT INTO `User_Accounts` values (1, Scott, )', fields, values )
            //     .then(...)
            // // disconnect

            // resolve/respond

        });

    }

    readById(id) {

        return new Promise((resolve, reject) => {
            // connect to the db

            console.log("promise-test");

            DB.connect()
            .then(conn => {
                
                // do some query

                console.log("test");
                
                conn.query(`SELECT User_Name from user_accounts where User_ID=${id}`)
                
                .then((results, error, fields) => {
                    // resolve/respond
                    console.log("query promise ")
                    if (error) return reject(error);
                    resolve(results);
                });
            })
            .catch(error => { reject(error); });
            // disconnect
            DB.disconnect();
        });

    }

    readByNickname(nickname) {

        return new Promise((resolve, reject) => {
            // connect to the db
            // do some query
            // disconnect
            // resolve/respond
        });

    }

    update(data) {
        // db.query( `UPDATE users SET nickname = '%${data.nickname}%' , '%${data.email}%' WHERE id=${data.id}`)
        // .then(...)
    }

    delete(id) { }
}

module.exports = UsersTable;
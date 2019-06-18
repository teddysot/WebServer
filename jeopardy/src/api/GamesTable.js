
/*
MySQL Table Accessor for the Users TAble for Quizshow
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
*/

'use strict';
const DB = require('./DatabaseConnection.js') ;

class GamesTable {

    create(data) {

        return new Promise((resolve, reject) => {

            // connect to the db
            DB.connect().then(conn => {
                //do some query
                console.log(data);
                conn.query(`INSERT INTO games(Bundle_ID) values ('${data}')`)
                .then((results, error, fields) => {
                    if (error) return reject(error);
                    resolve(results);
                });
            })
            .catch(error => {reject(error)});
            // disconnect
            DB.disconnect();

        });

    }

    readById(id) {

        return new Promise((resolve, reject) => {
            // connect to the db
            DB.connect()
            .then(conn => {
                // do some query
                conn.query(`SELECT User_Name from user_accounts where User_ID=${id}`)

                .then((results, error, fields) => {
                    // resolve/respond
                    if (error) return reject(error);
                    resolve(results);
                });
            })
            .catch(error => { reject(error); });
            DB.disconnect();
        });

    }

    update(data) {
        // db.query( `UPDATE users SET nickname = '%${data.nickname}%' , '%${data.email}%' WHERE id=${data.id}`)
        // .then(...)
    }

    delete(id) { }
}

module.exports = GamesTable;
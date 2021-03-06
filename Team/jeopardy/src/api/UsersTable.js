
/*
MySQL Table Accessor for the Users TAble for Quizshow
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
*/

'use strict';
const DB = require('./DatabaseConnection.js');

class UsersTable {

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
                 // disconnect
                DB.disconnect();

            }).catch(error => { reject(error) });
  

        });

    }

    updateUserRole(roleid, id)
    {
        return new Promise((resolve, reject) => {
            // connect to the db
            DB.connect()
                .then(conn => {
                    // do some query
                    conn.query(`UPDATE user_accounts SET Role_ID=${roleid} where User_ID=${id}`)

                        .then((results, error, fields) => {
                            // resolve/respond
                            if (error) return reject(error);
                            resolve(results);
                        });

                        DB.disconnect();

                }).catch(error => { reject(error); });
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

                        DB.disconnect();

                }).catch(error => { reject(error); });
        });

    }

    readByNickname(nickname) {
        return new Promise((resolve, reject) => {
            // connect to the db
            DB.connect()
                .then(conn => {
                    // do some query
                    conn.query(`SELECT * FROM user_accounts WHERE User_Name="${nickname}"`)

                        .then((results, error, fields) => {

                            // resolve/respond
                            if (error) return reject(error);
                            resolve(results);

                        });

                        DB.disconnect();

                }).catch(error => { reject(error); });
        });
    }

    update(data) {
        // db.query( `UPDATE users SET nickname = '%${data.nickname}%' , '%${data.email}%' WHERE id=${data.id}`)
        // .then(...)
    }

    delete(id) { }
}

module.exports = UsersTable;
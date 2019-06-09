
/*
MySQL Table Accessor for the Users TAble for Quizshow
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
*/

'use strict';
const DB = require('./DatabaseConnection.js')

class UsersTable
{
    create( data ) {

        return new Promise( ( resolve, reject ) => { 

            // connect to the db

            // // do some query
            // DB.query('INSERT INTO users (??) values (??)', fields, values )
            //     .then(...)
            // // disconnect

            // resolve/respond

        });

    }

    readById( id ) {

        // return new Promise( ( resolve, reject ) => { 
        //     // connect to the db
            
        //     DB.connect()
        //         .catch( error => {reject(error);})
        //         .then( db => {
        //             // do some query
        //             db.query(`SELECT * from users u where u.id=${id}`)
        //                 .then( (error, results, fields) => {
        //                     // resolve/respond
        //                     if(error) return reject (error);
        //                     resolve(results);
        //                 })
        //         })

        //     // disconnect
        //     DB.disconnect();
        // });
        
    }

    readByNickname( nickname ) {

        return new Promise( ( resolve, reject ) => { 
            // connect to the db
            // do some query
            // disconnect
            // resolve/respond
        });

    }

    update( data )
    {
        // db.query( `UPDATE users SET nickname = '%${data.nickname}%' , '%${data.email}%' WHERE id=${data.id}`)
        // .then(...)
    }

    delete( id ){}
}

module.exports = UsersTable;
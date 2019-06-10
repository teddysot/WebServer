
/*
Node.js serve for Quizshow
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
*/

'use strict';

const SQL = require('promise-mysql');

class DatabaseConnection 
{
    constructor(port = 3306)
    {
        this.port = port;
        this.connection = null
        this.options= {

            host:     'localhost', // pgwm.vfs.local
            user:     'root',
            password: '',
            database: 'quizshow'

        }
    }

    connect( options = this.options ) {
         return new Promise( (resolve, reject) => {

            SQL.createConnection(options)
            
            .catch(error => {reject(error)})
            .then( conn => { 

                //console.log(`connected to the db @${options.host}`);
                this.connection = conn;
                resolve( conn );  

            })
            
        })
    }

    disconnect() {
        this.connection.end();
    }
}

module.exports = new DatabaseConnection();
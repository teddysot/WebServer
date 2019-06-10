/*
Vue State Store VUEX for Quizshow
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
*/

/// !!! REMINDER !!! RUN node src/server.js

'use strict';
// ! TODO ! for local host connect to axios via //localhost:3000
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
//import { reject } from 'q';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
            // =========== Board Local Storage ===========
        board: {
            question: "What's Scott's Name?",
        },
            // =========== Player Local Storage ===========
        player: {

        },
            // =========== Host Local Storage ===========
        host: {

        },
            //  =========== Global Storage Actions ===========
        global: {

        }
    },
    mutations: {

    },
    actions: {

        //  =========== Global Storage Actions ===========

        // =========== Player Storage Actions ===========

        // =========== Board Storage Actions ===========

        GetQuestion()
        {
            // eslint-disable-next-line no-console
            console.log("Test");
            return new Promise((resolve, reject) => {
                Axios.post('//localhost:3000/api/question').then(data => {
                    console.log("Resolved");
                    this.state.board.question = data.data.payload;
                    resolve(data);
                })
                .catch(error => {
                    console.log("Error SQL");
                    reject(error)});
            });
            //return this.state.board.question;
        }
        
        // =========== Host Storage Actions ===========

    }
});



/**
         * To call this...
         * 
         * this.$tore.fetchPlayer(32, details)
         * .then(() => {
         *      // update the UI heer
         * })
        
        // fetchPlayer(playerId, playerDetails = {})
        // {
        //     // We create a new promise. Why? because we want to wait until what?
        //     return new Promise((resolve, reject) =>{

        //         // We post a request to the server url with the data.
        //         Axios.post("server/api/player", playerDetails).then(data=> {
        //             this.store.player = data.payload
        //             resolve(data);
        //         })
        //         .catch(error => {
        //             reject(error);
        //         }) 
        //     });
        // },
 */
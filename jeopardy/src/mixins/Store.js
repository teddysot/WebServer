/*
Vue State Store VUEX for Quizshow
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
*/

'use strict';
// ! TODO ! for local host connect to axios via //localhost:3000
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
//import { reject } from 'q';

// import Player from '../models/Player.js'

Vue.use( Vuex )

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

        }
    },
    mutations: {

    },
    actions: {
        /**
         * To call this...
         * 
         * this.$tore.fetchPlayer(32, details)
         * .then(() => {
         *      // update the UI heer
         * })
         */
        // fetchPlayer(playerId, playerDetails = {})
        // {
        //     // We create a new promise. Why? because we want to wait until what?
        //     return new Promise((resolve, reject) =>{
        //         //TODO: !!! SCOTT CODE !!! Change URL to server url
        //        // let url = `/api/player?id=${playerId}`;     // application/x-www-form-urlencoded
                
        //         //Axios.get("/api/player").then(data => { return this.store.player = data.payload});

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



        // =========== Player Storage Actions ===========

        // =========== Board Storage Actions ===========

        GetQuestion(bundleId = 1)
        {
            if(bundleId == 1)
            {
                return this.store.board.question;
            }
        }
        
        // =========== Host Storage Actions ===========

    }
});
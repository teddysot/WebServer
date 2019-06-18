/*
Vue State Store VUEX for Quizshow
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
*/

/// !!! REMINDER !!! RUN node src/server.js

'use strict';
// ! TODO ! for local host connect to axios via //localhost:3000
const SERVER_ADDRESS = '//localhost:3000';
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
//import { reject } from 'q';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // =========== Board Local Storage ===========
        board: {
            question: "Scotty!!",
            user: "",
        },
        // =========== Player Local Storage ===========
        player: {

        },
        // =========== Host Local Storage ===========
        host: {

        },
        //  =========== Global Storage Actions ===========
        global: {
            bundle: {
                count: 1,
                categoryList: [],
                categoryName: []
            },
            question: {
                id: 1,
                title: "question",
                answer: "answer",
                value: 100
            }
        }
    },
    mutations: {

    },
    actions: {

        //  =========== Global Storage Actions ===========

        // =========== Player Storage Actions ===========

        // =========== Board Storage Actions ===========

        CreateUser({ commit }, name) {
            return new Promise((resolve, reject) => {
                Axios.post(`${SERVER_ADDRESS}/api/createuser`, name).then(data => {
                    resolve(data);
                }).catch(error => { reject(error) });
            });
        },

        CreateGameSession({commit}, bundle) {
            return new Promise((resolve, reject) => {
                Axios.post(`${SERVER_ADDRESS}/api/creategame`, bundle).then(data => {
                    resolve(data);
                }).catch(error => { reject(error) });
            });
        },

        GetBundleList() {
            return new Promise((resolve, reject) => {
                Axios.post(`${SERVER_ADDRESS}/api/bundlelist`).then(data => {
                    this.state.global.bundle.count = data.data.count;
                    resolve(data);
                }).catch(error => { reject(error) });
            });
        },

        GetCategoryList({ commit }, id) {
            return new Promise((resolve, reject) => {
                Axios.post(`${SERVER_ADDRESS}/api/categorylist`, id).then(data => {
                    this.state.global.bundle.categoryList = data.data.categoryList;
                    resolve(data);
                }).catch(error => { reject(error) });
            });
        },

        GetCategory({ commit }, id) {
            return new Promise((resolve, reject) => {
                Axios.post(`${SERVER_ADDRESS}/api/category`, id).then(data => {
                    this.state.global.bundle.categoryName[id.id - 1] = data.data;
                    resolve(data);
                }).catch(error => { reject(error) });
            });
        },

        GetQuestion({ commit }, id) {
            return new Promise((resolve, reject) => {
                Axios.post(`${SERVER_ADDRESS}/api/question`, id).then(data => {
                    this.state.global.question = data.data;
                    resolve(data);
                }).catch(error => { reject(error) });
            });
        },

        GetQuestionByStore() {
            return this.state.board.question;
        },

        GetQuestionByServer() {
            return new Promise((resolve, reject) => {
                Axios.post(`${SERVER_ADDRESS}/api/questionbyserver`).then(data => {
                    this.state.board.question = data.data.payload;
                    resolve(data);
                }).catch(error => { reject(error) });
            });
        },

        GetQuestionByDatabase() {
            // eslint-disable-next-line no-console
            return new Promise((resolve, reject) => {
                Axios.post(`${SERVER_ADDRESS}/api/getusername`).then(data => {
                    this.state.board.question = data.data.payload;
                    resolve(data);
                })
                    .catch(error => {
                        reject(error)
                    });
            });
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
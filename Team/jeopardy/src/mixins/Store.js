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
            loadboard: false,

        },
            // =========== Player Local Storage ===========
        player: {
            role: 404,
            id: 404,
            name: "404",
        },
            // =========== Host Local Storage ===========
        host: {

        },
            //  =========== Global Storage Actions ===========
        global: {
            question:[],
            bundle: {
                count: 1,
                categoryList: [],
                categoryName: []
            },
        }
    },
    getters:
    {
        
    },
    mutations: {

        //TODO: !! WARNING !! parameters might be messed up.
        initializePlayer(state , payload)
        {
            state.player.role = payload.role;
            state.player.id = payload.id;
            state.player.name = payload.name;
        },

        updateRole(state , role)
        {
            state.player.role = role;
        },

        updateQuestions(state, questions)
        {
            state.global.question = questions.data;
        }


    },
    actions: {

        //  =========== Global Storage Actions ===========

        UpdateUserRole({ commit }, role)
        {
            let payload = 
            {
                roleid: role,
                id: this.state.player.id
            }

            return new Promise((resolve, reject) => {
                Axios.post(`${SERVER_ADDRESS}/api/updaterole`, payload).then(data =>{
                    commit('updateRole', data.data.roleid);
                    resolve(data);
                }).catch(error => {reject(error)});
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

        GetQuestionByCategory({commit}, id)
        {
            return new Promise((resolve, reject) => {
                let payload = []
                let counter = 0;
                let arrayCounter = 0;

                for(counter = 0; counter < this.state.global.question.length; counter++)
                {
                    if(this.state.global.question[counter].Category_ID == id)
                    {
                        payload[arrayCounter] =  this.state.global.question[counter];
                        arrayCounter++;
                    }
                }
                resolve(payload);
            });
        },

        // =========== Player Storage Actions ===========

        // Called at the start when you login.
        EvaluatePlayer({ commit }, name)
        {
            return new Promise((resolve, reject) => {
                Axios.post(`${SERVER_ADDRESS}/api/evalplayer`, name).then(data =>{
                    commit('initializePlayer', data.data);
                    resolve(data);
                }).catch(error => {reject(error)});
            });
        },

        // =========== Board Storage Actions ===========

        GetQuestions({commit})
        {
            return new Promise((resolve, reject) => {
                Axios.post(`${SERVER_ADDRESS}/api/getquestions`).then(data =>{
                    commit("updateQuestions", data.data);
                    this.state.board.loadboard = true;
                }).catch(error => {reject(error)});
            });
        },
        
        // =========== Host Storage Actions ===========

    }
});
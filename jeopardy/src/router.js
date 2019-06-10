/*
Vue Router
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
*/

import Vue from 'vue'
import Router from 'vue-router'

import HostPage from './routers/HostPage.vue' // TODO: Not yet made !! IMPORTANT !!
import LoginPage from './routers/LoginPage.vue' // TODO: Not yet made !! IMPORTANT !!
import BoardPage from './routers/BoardPage.vue' // TODO: Not yet made !! IMPORTANT !!
import PlayerPage from './routers/PlayerPage.vue' // TODO: Not yet made !! IMPORTANT !!
import AdminPage from './routers/AdminPage.vue' // TODO: Not yet made !! IMPORTANT !!

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {path:"/",       name:"Login",  component: LoginPage},
        {path:"/host",   name:"Host",   component: HostPage},
        {path:"/board",  name:"Board",  component: BoardPage},
        {path:"/player", name:"Player", component: PlayerPage},
        {path:"/admin",  name:"Admin",  component: AdminPage},
    ]
});
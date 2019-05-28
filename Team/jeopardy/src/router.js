/*
Vue Router
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
*/

import Vue from 'vue'
import Router from 'vue-router'

import HostPage from './routes/Hostpage.vue' // TODO: Not yet made !! IMPORTANT !!

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {path:"/",       name:"Login",  component: HostPage},
        {path:"/host",   name:"Host",   component: HostPage},
        {path:"/board",  name:"Board",  component: HostPage},
        {path:"/player", name:"Player", component: HostPage},
        {path:"/admin",  name:"Admin",  component: HostPage},
    ]
});
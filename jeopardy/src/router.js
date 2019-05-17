/*
<gameshow-about></gameshow-about>
@Copyright (C) 2019 Scott Henshaw. ALl rights reserved
*/

'use strict';

import Vue from 'vue'
import Router from 'vue-router'

import HostPage from './routers/Hostpage.vue'

Vue.use( Router );

export default new Router({
    mode: "history",
    routes: [
        { path: "/", name: "Login", component: HostPage},
        { path: "/host", name: "Host", component: HostPage},
        { path: "/board", name: "Board", component: HostPage},
        { path: "/player", name: "Player", component: HostPage},
        { path: "/admin", name: "Admin", component: HostPage},
    ]
})
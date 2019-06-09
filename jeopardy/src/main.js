
/*
Vue State Store VUEX for Quizshow
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
*/

'use strict';

import Vue from 'vue'
import Store from './mixins/Controller.js'
import Router from './router.js'
import App from './App.vue'
//TODO: Import router here

Vue.config.productionTip = false

class JeopardyGame {
  constructor()
  {
    this.view = new Vue({
        store: Store,
        router: Router,
        render: h => h(App),
      }).$mount('#app')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new JeopardyGame();
});
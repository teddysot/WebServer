import Vue from 'vue'
import App from './App.vue'
import Router from './router.js'

Vue.config.productionTip = false

class JeopardyGame {
  constructor() {
    this.view = new Vue({
      render: h => h(App),
    }).$mount('#app')
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new JeopardyGame();
})


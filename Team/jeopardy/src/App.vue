<template>
  <div id="app" class="flex-container">
    <!-- <div class = "flex-item"></div>
    <login-view class = "flex-grow"></login-view>
    <div class = "flex-item"></div>   -->
    
    <div class="flex-item"></div>
    <gameshow-board></gameshow-board>
    <div class="flex-item"></div>
  </div>
</template>



<script>

import GameshowBoard from './views/GameBoard.vue'
import PlayerList from './views/PlayerList.vue'
import GameBoard from './views/QuestionBoard.vue'
import QuestionTimer from './views/QuestionTimer.vue'
import ListItem from './views/ListItem.vue'
import { setInterval } from 'timers'
import LoginView from './views/Login.vue'

// TODO: Link methods to export default.
const methods = {

  // run(){
  //   this.mainLoop = setInterval(() => { this.$store.dispatch('updateSession'); }, UPDATE_FREQ);
  // },
}

export default {
  name: 'app',
  components: {
    GameshowBoard,
    PlayerList,
    GameBoard,
    QuestionTimer,
    ListItem,
    LoginView
  }
}
</script>

<style>
body{
  background: #4571c4;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.window-size
{
  width: 700px;
  height: 650px;
}

.conback 
{
  background: rgba(232,72,97,255);
  padding: 20px;
}

.flex-container {
  display: flex;
  padding: 3px;
}

.flex-item {
  flex: 1 1 auto;
}

.flex-grow
{
  flex: 2 1 auto;
}

.flex-wrap
{
  flex-wrap: wrap;
}

.button-base
{
  background: rgba(232,72,97,255);
  border: outset rgba(177, 168, 255, 255) 1px;
  border-radius: 5px;
}

.flex-column
{
  flex-direction: column;
}

</style>

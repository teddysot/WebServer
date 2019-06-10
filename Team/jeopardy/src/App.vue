<template>
  <div id="app" class="flex-container">
    <div>
      
    </div>
    <div class="flex-grow">
      <!--insert timer-->
    </div>
    <div class="conback flex-itemflex-container ">
      <div class="flex-item">
        <player-list></player-list>
      </div>
      <div class="conback flex-grow flex-container ">
        <gameshow-board></gameshow-board>
        <section v-show="false">
          <div class="flex-item">
          </div>
          <div class="flex-item">
          </div>
          <div class="flex-item">
          </div>
        </section>
      </div>
    </div>
    <div class="flex-grow">
      <!--insert timer-->
    </div>
  </div>
</template>

<script>
import GameshowBoard from './views/GameBoard.vue'
import PlayerList from './views/PlayerList.vue'
import GameBoard from './views/QuestionBoard.vue'
import QuestionTimer from './views/QuestionTimer.vue'
import ListItem from './views/ListItem.vue'

export default {
  name: 'app',
  components: {
    GameshowBoard,
    PlayerList,
    GameBoard,
    QuestionTimer,
    ListItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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

</style>

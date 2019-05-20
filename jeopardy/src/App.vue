<template>
  <div id="app">
    <GameHost name="Host"></GameHost>
  </div>
</template>

<script>
import GameHost from './components/Host.vue'

export default {
  name: 'app',
  components: {
    GameHost
  },
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
</style>

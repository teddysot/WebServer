<template>
  <div id="app">
    <gameshow-about name="Jeopardy"></gameshow-about>
  </div>
</template>

<script>
import GameshowAbout from './components/About.vue'

export default {
  name: 'app',
  components: {
    GameshowAbout
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

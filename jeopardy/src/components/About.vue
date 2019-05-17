<!--
<gameshow-about></gameshow-about>
@Copyright (C) 2019 Scott Henshaw. ALl rights reserved
-->

<template>
  <div v-bind:class="classList">
    <div>About {{name}} Vue {{appType}}</div>
  </div>
</template>

<script>
const viewModel = {
    appType: "Demo",
    classList: "about half-width"
}

export default {
  name: "GameshowAbout",
  data: () => { return viewModel },
  props: {
    name: String
  },
  methods: {},
  computed: {},
  components: {}
};
</script>

<style>
.about {
  background-color: teal;
  color: white;
  font-size: 24px;
  font-weight: 700;
}

.half-width{
    width: 50%;
}
</style>


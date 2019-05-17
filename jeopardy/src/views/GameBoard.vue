<!--
<gameshow-about></gameshow-about>
@Copyright (C) 2019 Scott Henshaw. ALl rights reserved
-->

<template>
  <div class="board wrapper">
    <button @keyup.enter="handleEnter()">Enter</button>
    <div v-for="index in questionCount" v-bind:key="index">${{ index * 100 }}</div>

    <button @click.prevent="goNow()">Go</button>
  </div>
</template>

<script>
const viewModel = {
  categoryList: ["A", "B", "C", "D", "E", "F"],
  questionCount: 5,
  qa: {
      question: "",
      answer: ""
  }
};

const methods = {
  handleEnter(event) {
    console.log("enter pressed");
  },

  goNow(event) {
    // Do something here
  }
};

export default {
  name: "GameshowBoard",
  data: () => {
    return viewModel;
  },
  props: {},
  methods,
  computed: {},
  components: {}
};
</script>

<style>
</style>


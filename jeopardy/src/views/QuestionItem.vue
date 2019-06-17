<!--
<question-item></question-item>
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
-->

<template>
  <div @click="GetQuestion()" class="question-item-wrapper flex-container">
    <div class="flex-item text question">Question<br>{{ CQuestion }}</div>
    <div class="flex-item text value">Value<br> {{ CValue }}</div>
    <div class="flex-item text answer">Answer<br>{{ CAnswer }}</div>
  </div>
</template>

<script>
import Store from "../mixins/Store.js";

const viewModel = {
  id: 1
};

const methods = {
  GetQuestion(event) {
    this.$store.dispatch("GetQuestion", { id: viewModel.id });
  }
};

export default {
  name: "question-item",
  data: () => {
    return viewModel;
  },
  props: {},
  methods,
  computed: {
    CQuestion() {
      return this.$store.state.global.question.title;
    },

    CAnswer() {
      return this.$store.state.global.question.answer;
    },

    CValue() {
      return this.$store.state.global.question.value;
    }
  },
  components: {}
};
</script>

<style scoped>
.question-item-wrapper {
  margin: 5px;
  border-radius: 10px;
  height: 96%;
  justify-items: center;
  flex-direction: column;
}

.question {
  background-color: aliceblue;
  margin-bottom: 1%;
}

.value {
  background-color: aliceblue;
  margin-bottom: 1%;
}

.text {
  font-size: 25px;
}

.answer {
  background-color: aliceblue;
}
</style>

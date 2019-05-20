<template>
  <div class="container centered">
    <div class="header">Jeopardy Host</div>
    <div class="body">
      <div class="left-panel">
        <div class="question">Question</div>
        <div class="answer">Answer</div>
        <div class="option">
          <div class="correct">Correct</div>
          <div class="wrong">Wrong</div>
        </div>
      </div>
      <div class="right-panel">
        <div class="timer">Timer</div>
        <div class="player-score">
          <div class="player-list">Player</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const viewModel = {
  appType: "Host"
};

export default {
  name: "GameHost",
  data: () => {
    return viewModel;
  },
  props: {
    name: String
  },
  methods: {},
  computed: {},
  components: {}
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgb(202, 240, 255);
  color: black;
  font-size: 24px;
  font-weight: 700;
}

.header {
  background-color: rgb(109, 177, 255);
  margin-top: 20px;
}

.body {
  display: flex;
  flex-direction: row;
  flex: 2 1;
  background-color: rgb(202, 240, 255);
  margin: 20px;
}

.left-panel {
  display: flex;
  flex-direction: column;
  background-color: rgb(50, 152, 255);
  width: 70%;
  margin-right: 0.5%;
}

.right-panel {
  display: flex;
  flex-direction: column;
  background-color: rgb(1, 128, 255);
  width: 30%;
  margin-left: 0.5%;
}

.question {
  background-color: rgb(0, 77, 153);
  width: 96%;
  height: 50%;
  margin-top: 2%;
  margin-left: 2%;
  margin-bottom: 2%;
}

.answer {
  background-color: rgb(0, 77, 153);
  width: 96%;
  height: 30%;
  margin-left: 2%;
  margin-bottom: 2%;
}

.option {
  display: flex;
  flex-direction: row;
  width: 96%;
  height: 20%;
  margin-left: 2%;
  margin-bottom: 2%;
}

.correct {
  background-color: rgb(0, 77, 153);
  width: 96%;
  height: 100%;
  margin-bottom: 2%;
}

.wrong {
  background-color: rgb(0, 77, 153);
  width: 96%;
  height: 100%;
  margin-left: 2%;
  margin-bottom: 2%;
}

.timer {
  background-color: rgb(0, 77, 153);
  width: 96%;
  height: 20%;
  margin-top: 2%;
  margin-left: 2%;
  margin-bottom: 2%;
}

.player-score {
  background-color: rgb(0, 77, 153);
  width: 96%;
  height: 80%;
  margin-left: 2%;
  margin-bottom: 2%;
}

.player-list {
  background-color: rgb(50, 72, 94);
  width: 96%;
  height: 5%;
  margin-top: 2%;
  margin-left: 2%;
  margin-bottom: 2%;
}

.centered {
  position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

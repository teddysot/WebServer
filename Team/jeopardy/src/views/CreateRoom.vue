<template>
  <div class="container centered">
    <div class="header">Create Room</div>
    <div class="body">
      <div class="left-panel">
        <div @click="GetBundleList()" class="bundle-header">Bundle List</div>
        <div class="bundle-selection">
          <div
            @click="GetBundleSelection(index), GetCategoryList(), GetCategory()"
            class="rows bundle-list"
            v-for="index in CBundleCount"
            v-bind:key="index"
          >Bundle {{index}}</div>
        </div>
        <div @click="CreateGame()" class="create">Create</div>
      </div>
      <div class="right-panel">
        <div class="bundle-header">Category List</div>
        <div class="category-area">
          <div
            class="rows category-list"
            v-for="index in CCategoryCount"
            v-bind:key="index"
          >{{CCategoryList[index-1]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const viewModel = {
  selectedBundle: 1,
  bundleCount: 1,
  categoryCount: 5,
  categoryList: []
};

export default {
  name: "CreateRoom",
  data: () => {
    return viewModel;
  },
  props: {
    name: String
  },
  methods: {
    GetBundleSelection(i) {
      viewModel.selectedBundle = i;
      console.log(viewModel.selectedBundle);
    },

    GetBundleList(event) {
      this.$store.dispatch("GetBundleList");
    },
    GetCategoryList(event) {
      this.$store.dispatch("GetCategoryList", { id: viewModel.selectedBundle });
    },
    GetCategory() {
      for (let index = 1; index <= 5; index++) {
        this.$store.dispatch("GetCategory", { id: index });
      }
    },
    CreateGame() {
      this.$store.dispatch("CreateGameSession", {
        bundle: viewModel.selectedBundle
      });
    }
  },
  computed: {
    CBundleCount() {
      return this.$store.state.global.bundle.count;
    },
    CCategoryCount() {
      return this.$store.state.global.bundle.categoryList.length;
    },
    CCategoryList() {
      return this.$store.state.global.bundle.categoryName;
    }
  },
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

.bundle-header {
  margin-top: 2%;
  height: 5%;
}

.bundle-selection {
  background-color: rgb(0, 77, 153);
  width: 96%;
  height: 80%;
  margin-left: 2%;
  margin-bottom: 2%;
}

.category-area {
  background-color: rgb(0, 77, 153);
  width: 96%;
  height: 80%;
  margin-left: 2%;
  margin-bottom: 2%;
}

.category-list {
  background-color: rgb(137, 231, 255);
  width: 96%;
  height: 5%;
  margin-top: 2%;
  margin-left: 2%;
  margin-bottom: 2%;
}

.bundle-list {
  background-color: rgb(137, 231, 255);
  width: 96%;
  height: 15%;
  margin-top: 2%;
  margin-left: 2%;
  margin-bottom: 2%;
}

.create {
  background-color: rgb(255, 159, 70);
  width: 96%;
  height: 15%;
  margin-top: 2%;
  margin-left: 2%;
  margin-bottom: 2%;
}

.columns {
  display: flex;
  flex-direction: column;
}

.centered {
  position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

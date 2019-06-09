<!--
<gameshow-board></gameshow-board>
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
-->

<template>
    <div class="board-wrapper">
        <div class="rows" v-for="index in questionCount" v-bind:key="index">
                <question-item class="flex-item"></question-item>
            <div class="columns"  v-for="index in categoryCount" v-bind:key="index">
                <question-item class="flex-item"></question-item>
            </div>
        </div>
    </div>
</template>

<script>
import QuestionItem from './QuestionItem.vue'

const viewModel = {
    questionCount:5,
    categoryCount:5,
    categoryList: ['A', 'B', 'C', 'D', 'E', 'F'],
    qa: {}
}

const methods = {
    handleEnter( event )
    {
        console.log("enter pressed")
    },

    goNow( event ) {
        //this.$store.player = new Player();

    }
}
export default {
    name: 'GameshowBoard',
    data: () => {return viewModel},
    props: {},
    methods,
    computed: {},
    components:{
        QuestionItem,
    }
}
</script>

<style scoped>

.board-wrapper {
    width: auto;
    height: auto;
    padding: 5px;
    background: rgba(255,202,79,255);
    border-radius: 5px;
}

.rows {
    display: flex;
    flex-direction: row;
}
.columns {
    display: flex;
    flex-direction: column;
}

</style>

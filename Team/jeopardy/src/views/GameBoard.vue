<!--
<gameshow-board></gameshow-board>
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
-->

<template>
    <div class="board-wrapper window-size flex-container flex-row flex-grow">
        
        <div class="item">
            <!--Timer here-->
        </div>

        <div class="flex-grow flex-container">
            <!-- Questions -->
            <div class="board" v-if="shouldLoad">
                <div class="rows" v-for="index in questionCount" v-bind:key="index">
                    <div class = "flex-item"></div>
                        <question-item :categoryID ="index" :questionID="base" class="flex-item"></question-item>
                    <div class="columns"  v-for="index2 in categoryCount" v-bind:key="index2">
                    <div class = "flex-item"></div>
                        <question-item :categoryID="index" :questionID="index2 - 1" class="flex-item"></question-item>
                    <div class = "flex-item"></div>
                    </div>
                    <div class = "flex-item"></div>
                </div>

                <!-- <div class="flex-container flex-column">
                    <div class="flex-item"></div>

                    <div class="flex-grow">
                        <div class="question"> {{qa.question}} </div>
                    </div>

                    <div class="flex-item"> 
                        <div> TEST </div>                        
                    </div>
                </div> -->
            </div>
        </div>

        <div class="item players-bg">
            <!-- Insert Player List here -->
            <player-list></player-list>
        </div>

    </div>
</template>

<script>
import QuestionItem from './QuestionItem.vue'
import PlayerList from './PlayerList'

const viewModel = {
    base: 0,
    questionCount:5,
    categoryCount:5,
    categoryList: ['A', 'B', 'C', 'D', 'E', 'F'],
    qa: {
        question: "temp",
    }
}

const methods = {
    handleEnter( event )
    {
        console.log("enter pressed")
    },
    GetQuestionDetails()
    {
        this.$store.dispatch("GetQuestions");
    }
}

export default {
    name: 'GameshowBoard',
    data: () => {return viewModel},
    props: {},
    methods,
    computed: {
        shouldLoad()
        {
            return this.$store.state.board.loadboard;
        }
    },
    components:{
        QuestionItem,
        PlayerList
    },
    mounted: function () {
        this.GetQuestionDetails()
    }
}
</script>

<style scoped>

.board-wrapper {
    background: rgba(255,202,79,255);
    border-radius: 5px;
}

.border-lock {
    width: 300px;
    height: 300px;
}

.rows {
    display: flex;
    flex-direction: row;
}
.columns {
    display: flex;
    flex-direction: column;
}

.board
{
    background: #dd922f;
    padding-top: 7%;
    margin: 5px;
    flex: 6 1 0;
    border-radius: 5px;
}

.question
{
    font-size: 60px;
}

.item
{
    flex: 1 1 0;
    margin: 5px;
}

.players-bg
{
    background: #dd922f;
    border-radius: 20px;
}

</style>

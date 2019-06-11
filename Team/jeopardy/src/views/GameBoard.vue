<!--
<gameshow-board></gameshow-board>
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
-->

<template>
    <div class="board-wrapper">
        <div class = "columns flex-container">
        <div>{{ text }} </div>
        <div class="flex-item">
            <input v-model="qa.question" placeholder="place name in me">
            <div v-on:click="SubmitData" class="debug-item"> 
                create new prof
            </div>
            <div v-on:click="GetByStore" class="debug-item"> 
                Store
            </div>
            <div v-on:click="GetByServer" class="item1"> 
                Server
            </div>
            <div v-on:click="GetByDatabase" class=" item2"> 
                Database
            </div>
        </div>
        </div>
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
    qa: {
        question: "temp",
    }
}

const methods = {
    handleEnter( event )
    {
        console.log("enter pressed")
    },

    GetByStore( event ) {
        this.$store.dispatch("GetQuestionByStore");
    },

    GetByServer( event ) {
        this.$store.dispatch("GetQuestionByServer");        
    },

    GetByDatabase( event ) {
        this.$store.dispatch("GetQuestionByDatabase");        
    },
    SubmitData(event)
    {
        this.$store.dispatch("CreateUser", {name: viewModel.qa.question});
    }
}

export default {
    name: 'GameshowBoard',
    data: () => {return viewModel},
    props: {},
    methods,
    computed: {
        text()
        {
            return this.$store.state.board.question;
        }
    },
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

.debug-item
{
    display: flex;
    width: 100px;
    height: 100px;
    background: #000000;
    color: white;
}

.item1
{
    width: 100px;
    height: 100px;
    background: #004525;
    color: white;

}

.item2
{
    width: 100px;
    height: 100px;
    background: #F34412;
    color: white;

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

</style>

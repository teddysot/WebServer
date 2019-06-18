<!--
<question-item></question-item>
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
-->

<template>
    <div class="question-item-wrapper item flex-container">
        <div class = "flex-item"></div>
        <div class = "flex-grow flex-container">
            <div v-show="false" class = "flex-item text question">
                {{ questionID }}
            </div>
            <div class = "flex-item text">
                ${{ questions[questionID].Value }}
            </div>
        </div>
        <div class="flex-item"></div>    
    </div>
</template>

<script>
import Store from '../mixins/Store.js';

const viewModel = {
    value: 100,
    question: "hello world!",
    questions: [],
}

const methods = {
    GetQuestions()
    {
       this.$store.dispatch("GetQuestionByCategory", this.categoryID).then(data =>
       {
           viewModel.questions = data;
       });
    }
}

export default {
    name: "question-item",
    data: ()=>{ return viewModel },
    props: {
        questionID: Number,
        categoryID: Number
    },
    methods,
    computed: {},
    components:{},
    created: function ()
    {
        this.GetQuestions();
    }
}
</script>

<style scoped>

.question-item-wrapper {
    margin: 5px;
    background: rgba(255,232,155,255);
    border-radius: 10px;
    width: 64px;
    height: 64px;
    justify-items: center;
}

.question-item-wrapper:hover {
    background: rgba(255,242,165,255);
}

.text {
    margin-top:35px;
    font-size: 25px;
}

.item
{
    flex:0 0 0;
}

</style>

<!--
<question-item></question-item>
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
-->

<template>
    <div class="question-item-wrapper flex-container">
        <div v-show="false" class = "flex-item text question">
            {{ question }}
        </div>
        <div class = "flex-item text">
            ${{ value }}
        </div>        
    </div>
</template>

<script>
import Store from '../mixins/Store.js';

const viewModel = {
    value: 100,
    question: "hello world!",
}

const methods = {

}

export default {
    name: "question-item",
    data: ()=>{ return viewModel },
    props: {},
    methods,
    computed: {},
    components:{}
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

</style>

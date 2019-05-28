<!--
<question-board></question-board>
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
-->

<template>
    <div id="question-wrapper" class="flex-item">
        <div>
            {{question}}
        </div>
    </div>
</template>

<script>
const viewModel = {
    question: "What's the deal with airplane food?",
}

const methods = {

}

export default {
    name: "question-board",
    data: ()=>{ return viewModel },
    props: {},
    methods,
    computed: {},
    components:{}
}
</script>

<style scoped>

.spread-items {
    align-content: space-between;
}

.column
{
    flex-direction: column;
}

.percent
{
    width: 20%;
    height: 100%;
}

.text
{
    /*margin: 25%;*/
}

#question-wrapper
{
    width: 600px;
    height: 120px;
    background: rgba(255,255,111,255);
    border-radius: 25px;
    padding-top: 5%;
}

.flex-item
{
    background: rgba(255, 0, 0, 255);
}

</style>

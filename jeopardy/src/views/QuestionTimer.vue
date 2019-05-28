<!--
<question-timer></question-timer>
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
-->

<template>
    <div id="timer-wrapper" class="flex-item">
        {{ time }}
    </div>
</template>

<script>
const viewModel = {
   time: "11:00",

}

const methods = {

}

export default {
    name: "question-timer",
    data: ()=>{ return viewModel },
    props: {},
    methods,
    computed: {},
    components:{}
}
</script>

<style scoped>
#timer-wrapper
{
    width: 100px;
    height: 70px;
    background: rgba(189,76,45,255);
    border-radius: 5px;
    padding-top: 25px;
}
</style>

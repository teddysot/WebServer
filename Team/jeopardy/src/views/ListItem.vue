<!--
<list-item></list-item>
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
-->

<template>
    <div class = "item-wrapper flex-container">
        <div class = "flex-item display">
            <div class= "player-name"> {{ name }} </div>
        </div>
        <div class = "flex-item display">
            <div class= "player-money">${{ playerMoney }}</div>
        </div>
    </div>
</template>


<script>

const viewModel = {
    name: "Alex",
    playerMoney: 100,
}

const methods = {}

export default {
    name: "ListItem",
    data: ()=>{ return viewModel },
    props: {},
    methods,
    computed: {},
    components:{}
}

</script>

<style scoped>

.item-wrapper {
    border: none;
    border-radius: 5px;
    background: rgba(167, 150, 255, 255);
    width: 200px;
    height: 20px;
    margin: 2px;
}

.item-wrapper:hover {
    background: rgba(177, 168, 255, 255);
}

.player-name {
    padding-top: 2px;
    background: rgba(255,255,255,255);
    border-radius: 2px;
    color: rgba(0,0,0,255);
}


.player-money {
    padding-top: 2px;
    color: rgba(255,255,255,255);
}

</style>

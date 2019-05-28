<!--
<player-list></player-list>
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
-->

<template>
    <div class="player-list-wrapper flex-container ">
        <div class="flex-item">
            Players
        </div>
        <div class="player-item-container flex-item" v-for="index in playerCount" v-bind:key="index">
            <list-item></list-item>
        </div>
    </div>
</template>

<script>
import ListItem from "./ListItem.vue"
const viewModel = {
    playerCount: 5,
}

const methods = {

}

export default {
    name: "PlayerList",
    data: ()=>{ return viewModel },
    props: {},
    methods,
    computed: {},
    components:{
        ListItem,
    }
}
</script>

<style scoped>
.player-list-wrapper {

    border-radius: 5px;
    background: rgba(207,184,255);
    width: auto;
    height: auto;
    flex-direction: column;
}


.player-item-container{
    flex: 1 4 auto;
}
</style>

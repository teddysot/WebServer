<!--
<gameshow-about></gameshow-about>
@copyright (c) 2019 Carlos Miguel Aquino. All rights reserved
-->

<template>
    <div v-bind:class="classList">
        <div>
            About {{ name }} Vue Demo {{ appType }}
        </div>
    </div>
</template>

<script>

const viewModel = {
    appType: "demo",
    classList: "about half-width"
}

import Controller from "../mixins/Controller.js"

class AboutController extends Controller
{
    constructor( name )
    {
        super(name);
        this.vm = {
            viewModel
        };
    }

    doIt() {
        console.log("hello world");
    }
}

export default new AboutController('GameshowAbout');

/*
export default {
    name: 'GameshowAbout',
    data: () => {return viewModel},
    props: {
        name: String,
    },
    methods: {},
    computed: {},
    components:{}
}*/
</script>

<style>
.about {
    background-color: teal;
    color: white;
    font-size: 24px;
    font-weight: 700px;
}

.half-width {
    width: 50%;
}
</style>


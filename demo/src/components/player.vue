<!-- 
<pg-player></pg-player>
@Copyright (C) 2019, Scott Henshaw, All rights reserved.
 -->

 </<template>
     <div class="">
         <span class="p-name">{{ name }}</span><span class="p-score">{{ score }}</span>
     </div>
 </template>

 <<script>
 // import things we need here

 const viewModel = {
     name: 'Alex',
     score: 0
 }

 const methods = {}

 // export a definition for the app to use with the Vue instance
 export default {
     name: 'Player',
     props: {},
     methods,
     components: {},
     data() { return viewModel }
 }
 </script>

 <style>
    .p-name {}
    .p-score {}
 </style>
 
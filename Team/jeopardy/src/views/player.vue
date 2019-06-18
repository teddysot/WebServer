<!--
@copyright (C)2019 Vancouver Film School Kate Brough All rights Reserved
-->\
<template>
    <div class = "PlayerScreen">
        <header>
        <h1 @click=Works>list</h1> <!--communicates with board to get the list of players and their score-->
        <h2>quit</h2>
        <div v-if="show">
            <li>player1:40$</li>
            <li>player2:80$</li>
            <li>AlexSilva:-350$</li>
        </div>
        </header>
        <h3> {{playername}} has: {{score}}$</h3> <!--communicates with host board on how much money player has-->
        <div class = "timer"> <div>timer</div>  </div> <!---timer-->
        <button></button>
        <!--@click = didit(on the line above)-->
        
    </div>
</template>




<script>
//import things we need here

const viewModel = {
    //playername: 'player',
   score: 400,
   show: false,
}
//const methods = {}

//export a definition for the app to use with the Vue Instance
    export default {
          name:'pgPlayer',
          data(){return viewModel},
          props: {
              
          },
          methods: {

                Works()
                {
                    this.$store.dispatch("GetPlayer");
                    viewModel.show = !viewModel.show;
                },
          },
          components: {},
          computed:{
              playername()
              {
                  return this.$store.state.player.name;
              }
          },
    }
</script>
<style>
header, h1,h2{
    padding: 15px;
    background-color: #e27aff;
    color:black;

}
h1{
    float: left;
    
}
h2{
    float: right;
}
h3{
    background-color: #c3ff7a;
    padding: 15px;
    color:black;
    float: center;
    clear: both;

}
.timer {
   height: 100%;
  
  /*float: center;*/
  padding: 15px;
  /*line-height: 22px; */
  width: 100px;
  clear: both;
  background-color: #94d4ff;
  display: inline-block;
  /*box-sizing: border-box;*/
}
/* .buttonclicked{
     background-color: blue;
}  */

button{
 height: 200px;
  width: 200px;
  margin:100px auto;
  background-color: red;
  border-radius: 50%;
  
}

/* .button[disabled]{
background-color: blue;
} */

</style>
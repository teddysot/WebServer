<template>
    <div class="window-size flex-container flex-column">
        <div class = "flex-container flex-column flex-item">

            <div class="flex-grow ">
                <div class="title"> Jeopardy </div>
            </div>

            <!-- Login/Register Landing Page. -->
            <div v-if="showButtons" class = "flex-container flex-column flex-item">
                <div class="flex-item buttons">
                    <div @click="toggleButton(); toggleLogin();"  class="button-base text">
                        PLAY
                    </div>
                </div>
            </div>

            <!--Login Input-->
            <div v-if="login" class = "flex-container flex-column flex-item">
                <input class="flex-grow input-text" v-model="loginName" placeholder="Username">
                <div class = "flex-item buttons">
                    <div @click="callLogin();" class= "button-base text">
                        login
                    </div>
                </div>
            </div>

            <!-- Role Input -->
            <div v-if="role" class = "flex-container flex-column flex-item">   
               <div class=" flex-item text">
                    Please Choose a role:
               </div>

                <div class = "flex-item buttons">
                    <div @click="setRole(1)" class= "button-base text">
                        HOST
                    </div>
                </div>

                <div class = "flex-item buttons">
                    <div @click="setRole(2)" class= "button-base text">
                        PLAYER
                    </div>
                </div>

                <div class = "flex-item buttons">
                    <div @click="setRole(3)" class= "button-base text">
                        BOARD
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

const viewModel = {
    
    role: false,
    login: false,
    showButtons: true,
    loginName: "",

}
const methods = {

    toggleButton()
    {
        viewModel.showButtons = !viewModel.showButtons;
    },
    toggleLogin()
    {
        viewModel.login = !viewModel.login;
    },
    callLogin()
    {
        if(viewModel.login != "")
        {
            viewModel.login = !viewModel.login;
            // TODO: do evaluation here
            // GET user data if they're already registered OR CREATE user if they haven't
            this.$store.dispatch("EvaluatePlayer", {name:viewModel.loginName});
            viewModel.role = !viewModel.role;
        }
    },
    setRole(role)
    {
        this.$store.dispatch("UpdateUserRole", role);
    }
}

export default {
    name: 'LoginView',
    data: () => {return viewModel},
    props: {},
    methods,
    computed: {},
    components: {}
}
</script>

<style scoped>

.title
{
    font-size: 60px;
    color: white;
    background: #375897;
    padding: 60px;
    border-radius: 20px;
}

.buttons
{
    padding-left: 100px;
    padding-right: 100px;
}

.text
{
    padding-top: 20px;
    padding-bottom: 20px;
    color: white;
    font-size: 20px;
}

.input-text
{
    color: black;
    font-size: 30px;
    margin-bottom: 20px;
    border-radius: 20px;
}

</style>

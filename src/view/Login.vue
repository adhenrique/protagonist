<template>
    <div class="wrapper">
        <div class="register-background">
            <div class="filter-black"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 text-center col-xs-10 col-xs-offset-1 ">
                        <img src="./../assets/img/logo-alt.png" class="" style="height:45px;" alt="Protagonist">

                        <div class="register-card">
                            <h3 class="title">LOGIN</h3>
                            <div v-if="error" style="color:red">{{error}}</div>
                            <br>                             <form @submit.prevent="handleSubmit" class="register-form" id="login">
                            <input type="text" v-model="email" class="form-control" id="email" placeholder="Email"><div v-show="submitted && !email" class="invalid-feedback" style="color:#000">Insira seu email</div>

                            <br>         <input type="password" v-model="senha" class="form-control" id="senha" placeholder="Senha"><div v-show="submitted && !senha" class="invalid-feedback" style="color:#000">Insira sua senha</div>
                            <button id="meu-submit" class="btn btn-login btn-block" :disabled="loading">Entrar   <i class="fa fa-arrow-right"></i></button>
                        </form>

                            <div class="forgot bottom">
                                <a href="#" class="btn btn-simple">Esqueceu a Senha?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {API_URL} from "../config";

    export default {
        name: "Login.vue",
        data () {
            return {
                email: '',
                senha: '',
                submitted: false,
                loading: false,
                returnUrl: '',
                error: '',
                apiUrl: API_URL
            }
        },
        created () {
            // reset login status
            this.logout();

            // get return url from route parameters or default to '/'
            this.returnUrl = this.$route.query.returnUrl || '/';
        },
        watch: {
            email (newemail) {
                this.$root.email = newemail;
            },
            senha (newsenha) {
                this.$root.senha = newsenha;
            }
        },
        methods: {
            handleSubmit (e) {
                this.submitted = true;
                const { email, senha } = this;

                // stop here if form is invalid
                if (!(email && senha)) {
                    return;
                }

                this.loading = true;
                this.login(this.email, this.senha)
                    .then(
                        user => this.$router.push(this.returnUrl),
                        error => {
                            this.error = error;
                            this.loading = false;
                        }
                    );
            },
            logout() {
                localStorage.removeItem('user');
            },
            login(e, s) {
                let data = new FormData(),
                    that = this;

                data.set('email', e);
                data.set('senha', s);

                return this.$http.post(this.apiUrl, data)
                    .then(function(res) {

                        if(res.data.OK){
                            localStorage.setItem('user', JSON.stringify(res.data.nome));
                        }else{
                            that.loading = false;
                            that.logout();
                            that.error = "LOGIN INVALIDO"
                        }
                    }).catch( function(err){
                        return console.log(err);
                    });
            }
        }
    }
</script>

<style scoped>

</style>

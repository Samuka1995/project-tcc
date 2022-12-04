<template>
    <div v-if="!loading" class="container">
        <h2>Bem vindo, faça o Login.</h2>

        <p class="erro" v-for="(erros, index) in error" :key="index">{{ erros }}</p>

        <div class="form-floating mb-5 w-50">
            <input v-model="emailLogin"
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
            />
            <label class="input-label" for="floatingInput">E-mail</label>
        </div>

        <div class="form-floating w-50">
            <input v-model="passwordLogin"
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
            />

            <label class="input-label" for="floatingPassword">Senha</label>
        </div>

        <button type="submit" class="btn w-25 mt-5" @click="solicitacaoReserva">
            Entrar
        </button>

        <ul class="nav flex-column mt-5">
            <router-link to="/email-recuperar-senha" class="links">
                <span>Recuperar Senha </span>
            </router-link>

            <router-link to="/cadastro" class="links">
                <span>Novo Cadastro</span>
            </router-link>
        </ul>

        <!-- <div v-for="(pokemon, index) in pokemons" :key="index">
            {{ pokemon.url }}
        </div> -->
    </div>
    <loading v-else />
</template>

<script>
    // import api from "@/services/api"
    import loading from '@/components/loading'
    // import { onMounted, ref } from 'vue';

    export default {
        name: "bem-vindo",

        props: {
            msg: String,
        },

        components: {
            loading
        },

        data() {
            return {
                loading: true,
                emailLogin: '',
                passwordLogin: '',
                error: []
            };
        },

        // setup() {
        //     const pokemons = ref([])

        //     const fetchPokemons = () =>
        //     api.get('/pokemon?limit=20')
        //     .then((response) => pokemons.value = response.data.results)

        //     onMounted(fetchPokemons)

        //     return {pokemons}
        // },

        mounted() {
            setTimeout(() => {
                this.loading = false
            }, 1500)

            console.log(this.email);
            console.log(this.password);
        },

        methods: {
            solicitacaoReserva() {
                this.validaCampoPreenchido()

                this.$router.push({
                    name: "login.solicitacaoreserva",
                });

            },

            validaCampoPreenchido(e) {
                if (this.emailLogin && this.passwordLogin) {
                        return true
                }

                this.error = []

                if (!this.emailLogin && !this.passwordLogin){
                    this.error.push('Todos os campos são Obrigatórios')
                }

                e.preventDefault()

            }
        },
    };
</script>

<style scoped>
    .container {
        border-radius: 10px 10px 0 0;
        background: #111111;
        color: #ffffff;
        margin-top: 30px;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .erro {
        position: absolute;
        top: 235px;
        color: red;
    }
    .form-floating {
        background: #111111;
    }
    .form-floating input {
        color: white;
    }
    .form-floating > label {
        background: transparent;
    }
    #floatingInput,
    #floatingPassword {
        background: #767676;
    }
    .form-control {
        border: none;
    }
    .form-control:focus {
        border-color: #767676;
        box-shadow: 0 0 5px rgba(98, 101, 228, 1) !important;
    }
    .input-label {
        background: #767676;
        border-radius: 5px;
    }
    .btn {
        background: #9146ff;
        color: white;
        font-weight: 600;
    }
    .btn:hover {
        background: #9146ff;
        border: none;
        height: 38px;
    }
    .nav {
        --bs-nav-link-color: white;
        --bs-nav-link-hover-color: none;
        font-weight: 600;
        align-items: center;
        background: #111111;
    }
    .nav-custom {
        background: #111111;
    }
    .links {
        text-decoration: none;
        color: #ffffff;
        margin-top: 8px;
    }
    h2 {
        position: relative;
        right: 41%;
        width: 225px;
        background: #111111;
        top: 7%;
    }
</style>

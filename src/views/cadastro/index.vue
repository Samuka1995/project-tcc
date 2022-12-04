<template>
    <div v-if="!loading" class="container">
        <h2>Realize seu Cadastro.</h2>
        <form action="" v-on:submit.prevent="checaFormulario">
            <p class="erro" v-for="(erros, index) in erro" :key="index">{{ erros }}</p>

            <div class="form-floating mb-3 w-50">
                <input v-model="nomeAluno"
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Nome:"
                />
                <label class="input-label" for="floatingInput">Nome Completo:*</label>
            </div>

            <div class="form-floating mb-3 w-50">
                <input v-model="raAluno"
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="RA:"
                />
                <label class="input-label" for="floatingInput">RA:*</label>
            </div>

            <div class="form-floating mb-3 w-50">
                <input v-model="emailAluno"
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                />
                <label class="input-label" for="floatingInput"
                    >E-mail Institucional:*</label
                >
            </div>

            <div class="form-floating w-50 mb-3">
                <input v-model="password"
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password:"
                />
                <label class="input-label" for="floatingPassword">Senha:*</label>
            </div>

            <div class="form-floating w-50 mb-3">
                <input v-model="confirmarPassword"
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Confirmar Password:"
                />
                <label class="input-label" for="floatingPassword">Confirmar Senha:*</label>
            </div>

            <button @click="adicionarDadosFormulario"
                class="btn w-25 mt-4 mb-4"
            >
                Cadastrar
            </button>
        </form>

        <div class="d-flex mt-2 align-baseline">
            <p>Ao se cadastrar, você concorda com o nosso</p>
            <a class="text-decoration-none" href="termo-uso">Termo de Uso</a>
        </div>
    </div>
    <loading v-else />
</template>

<script>
    import loading from '@/components/loading'

    export default {
        name: "cadastro-usuario",

        props: {
            msg: String,
        },

        components: {
            loading
        },

        data() {
            return {
                loading: true,
                nomeAluno: '',
                raAluno: '',
                emailAluno: '',
                password: '',
                confirmarPassword: '',
                formularios: [],
                erro: []
            };
        },

        created() {
            setTimeout(() => {
                this.loading = false
            }, 1500)


            const json = localStorage.getItem('formularios')
            if(json) {
                try {
                    this.formularios = JSON.parse(localStorage.getItem('formularios'))
                } catch (e) {
                    localStorage.removeItem('formularios')
                }
            }
        },

        methods: {
            retornaPaginaLogin() {
                this.$router.push({
                    name: "login",
                });
            },

            adicionarDadosFormulario() {
                const objetoFormulario = {
                    nome: this.nomeAluno,
                    ra: this.raAluno,
                    email: this.emailAluno,
                    password: this.password,
                    confirmarPassword: this.confirmarPassword
                }
                this.formularios.push(objetoFormulario)

                localStorage.setItem('formularios', JSON.stringify(this.formularios))

                this.validaCampoPreenchido()

                this.retornaPaginaLogin()

            },

            validaCampoPreenchido(e) {
                if (this.nomeAluno && this.raAluno && this.emailAluno && this.password && this.confirmarPassword) {
                        return true
                }

                this.erro = []

                if (!this.nomeAluno || !this.raAluno || !this.emailAluno || !this.password || !this.confirmarPassword){
                    this.erro.push('Todos os campos são Obrigatórios')
                }

                e.preventDefault()
            }
        },

    };
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .erro {
        position: absolute;
        top: 235px;
        color: red;
    }

    .container {
        margin-top: 50px;
        background: #111111;
        color: #ffffff;
        width: 100%;
        align-items: center;
        display: flex;
        flex-direction: column;
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
    .d-flex {
        background: #111111;
        flex-direction: row;
        align-items: baseline;
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
    h2 {
        position: relative;
        right: 40%;
        width: 225px;
        background: #111111;
        top: 7%;
    }
    p {
        font-size: 20px;
        background: #111111;
        color: #767676;
        margin-right: 5px;
    }
    a {
        font-size: 16px;
        background: #111111;
        color: white;
        font-weight: 700;
    }
    a:hover {
        color: #ffffff;
    }
</style>

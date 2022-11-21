<template>
    <div v-if="!loading" class="container">
        <h2>E-mail de recuperação de Senha.</h2>

        <div class="form-floating mb-3 w-50">
            <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
            />
            <label class="input-label" for="floatingInput"
                >E-mail Institucional</label
            >
        </div>

        <button
            type="submit"
            class="btn w-25 mt-5 mb-4"
            @click="retornaPaginaLogin"
        >
            Enviar E-mail
        </button>

    </div>
    <loading v-else/>
</template>

<script>
    import loading from '@/components/loading'

    export default {
        name: 'email-recuperar-senha',

        components: {
            loading
        },

        data() {
            return {
                loading: true
            }
        },

        mounted() {
            setTimeout(() => {
                this.loading = false
            }, 1500)
        },

        methods: {
            retornaPaginaLogin() {
                this.$router.push({
                    name: "login.recuperarsenha",
                });
            },
        },
    };
</script>

<style scoped>
    .container {
        margin-top: 50px;
        color: #ffffff;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .form-control {
        border: none;
    }
    .form-control:focus {
        border-color: #767676;
        box-shadow: 0 0 5px rgba(98, 101, 228, 1) !important;
    }
    #floatingInput {
        background: #767676;
    }
    .form-floating {
        background: #111111;
        bottom: 10%;
    }
    .form-floating input {
        color: white;
    }
    .form-floating > label {
        background: transparent;
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
        bottom: 20%;
        width: 225px;
        background: #111111;
    }
</style>

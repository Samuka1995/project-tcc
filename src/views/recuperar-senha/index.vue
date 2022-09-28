<template>
<div class="container">
    <h2>Recupere sua Senha.</h2>
    <div class="form-floating mb-3 w-50">
    <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
    />
    <label class="input-label" for="floatingInput">Código de validação</label>
    </div>
    <div class="form-floating w-50 mb-3">
    <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
    />
    <label class="input-label" for="floatingPassword">Senha</label>
    </div>
    <div class="form-floating w-50 mb-3">
    <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
    />
    <label class="input-label" for="floatingPassword">Confirmar Senha</label>
    </div>
    <button
    type="submit"
    class="btn w-25 mt-5 mb-4"
    @click="retornaPaginaLogin"
    >
    Recuperar Senha
    </button>
</div>
</template>

<script>
export default {
name: 'recuperar-senha',

methods: {
    retornaPaginaLogin() {
    this.$router.push({
        name: "login",
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
h2 {
position: relative;
right: 40%;
bottom: 11%;
width: 225px;
background: #111111;
}
</style>

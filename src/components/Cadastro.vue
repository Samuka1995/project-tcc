<template>
  <div style="background: #111111; border-radius: 10px 10px 0 0">
    <h1 class="header-logo">Wyden</h1>
    <div class="container">
      <h2>Realize seu Cadastro.</h2>
      <div class="form-floating mb-3 w-50">
        <input
          type="name"
          class="form-control"
          id="floatingInput"
          placeholder="José Antonio dos Santos"
        />
        <label class="input-label" for="floatingInput">Nome Completo</label>
      </div>
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
        <label class="input-label" for="floatingPassword"
          >Confirmar Senha</label
        >
      </div>
      <button
        type="submit"
        class="btn w-25 mt-5 mb-4"
        @click="retornaPaginaLogin"
      >
        Cadastrar
      </button>
      <div class="d-flex mt-5 align-baseline">
        <p>Ao se cadastrar, você concorda com o nosso</p>
        <a class="text-decoration-none" href="termo-uso">Termo de Uso</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BemVindo",
  props: {
    msg: String,
  },
  methods: {
    retornaPaginaLogin() {
      this.$router.push({
        name: "login",
      });
    },
  },

  data() {
    return {
      user: "Samuel",
    };
  },
};
</script>

<style scoped>
.container {
  margin-top: 15vh;
  background: #111111;
  color: #ffffff;
  width: 100%;
  height: 85vh;
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

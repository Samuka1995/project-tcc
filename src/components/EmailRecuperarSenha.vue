<template>
  <div style="background: #111111; border-radius: 10px 10px 0 0">
    <h1 class="header-logo">Wyden</h1>
    <div class="container">
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
  </div>
</template>

<script>
export default {
  methods: {
    retornaPaginaLogin() {
      this.$router.push({
        name: "recuperarSenha",
      });
    },
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

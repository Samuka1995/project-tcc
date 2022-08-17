<template>
  <div style="background: #111111; border-radius: 10px 10px 0 0">
    <h1 class="header-logo">Solicitação de Reserva</h1>
    <div class="container">
      <h2>Reserve seu computador para:</h2>
      <div class="container-checkbox">
        <div class="form-check form-switch" style="rgb(17, 17, 17, 90%)">
          <input
            class="form-check-input"
            type="checkbox"
            style="width: 50px; height: 22px"
            role="switch"
            id="flexSwitchCheckChecked"
            checked
          />
          <label
            class="form-check-label"
            style="
              font-size: 20px;
              font-weight: 600;
              left: 15px;
              background: rgb(255, 255, 255, 10%);
            "
            for="flexSwitchCheckChecked"
            >Hoje</label
          >
        </div>
        <div
          class="form-check form-switch"
          style="background: rgb(255, 255, 255, 10%)"
        >
          <input
            class="form-check-input"
            type="checkbox"
            style="width: 50px; height: 22px"
            role="switch"
            id="flexSwitchCheckChecked"
            checked
          />
          <label
            class="form-check-label"
            style="
              font-size: 20px;
              font-weight: 600;
              left: 15px;
              background: rgb(255, 255, 255, 10%);
            "
            for="flexSwitchCheckChecked"
            >Amanhã</label
          >
        </div>
        <div
          class="form-check form-switch"
          style="background: rgb(255, 255, 255, 10%)"
        >
          <input
            class="form-check-input"
            type="checkbox"
            style="width: 50px; height: 22px"
            role="switch"
            id="flexSwitchCheckChecked"
            checked
          />
          <label
            class="form-check-label"
            style="
              font-size: 20px;
              font-weight: 600;
              left: 15px;
              z-index: 5;
              background: rgb(255, 255, 255, 10%);
            "
            for="flexSwitchCheckChecked"
            >Depois de Amanhã</label
          >
        </div>
      </div>
      <button type="submit" class="btn w-25 mt-1">Selecione Horário</button>
      <button type="submit" class="btn w-25 mt-5">Solicitar</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    retornaPaginaLogin() {
      this.$router.push({
        name: "RecuperarSenha",
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
.container-checkbox {
  width: 500px;
  height: 200px;
  padding: 30px;
  background: rgb(255, 255, 255, 10%);
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
h1 {
  margin-left: 40%;
  width: 100vh;
}
h2 {
  margin-left: 30%;
  width: 100vh;
  background: #111111;
}
</style>

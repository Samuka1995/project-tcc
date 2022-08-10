<template>
  <div>
    <div class="container">
      <h2>{{ msg }}</h2>
      <div class="form-floating mt-5 mb-5 w-50">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label class="input-label" for="floatingInput">E-mail</label>
      </div>
      <div class="form-floating w-50">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label class="input-label" for="floatingPassword">Senha</label>
      </div>
      <button type="submit" class="btn w-25 mt-5">Entrar</button>
      <ul class="nav flex-column mt-5">
        <li class="nav-item">
          <a class="nav-link active nav-custom" aria-current="page" href="#"
            >Recuperar Senha</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link nav-custom" href="#">Novo Cadastro</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BemVindo",
  props: {
    msg: String,
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
h2 {
  position: relative;
  right: 40%;
  width: 225px;
  background: #111111;
  padding: 20px;
}
</style>

<template>
  <div>
    <div class="container-header-wyden" v-if="!termoUso">
      <div class="container-header-reserve" v-if="solicitacaoReserva">
        <h1 class="header-logo">Solicitação de Reserva</h1>
      </div>
      <div class="container-wyden">Wyden</div>
    </div>

    <div class="container-header-left-arrow" v-if="termoUso">
      <router-link to="/cadastro" class="arrow-left">
        <em class="arrow-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="white"
            style="background: #9146ff"
            class="bi bi-caret-left"
            viewBox="0 0 16 16"
            stroke="white"
            stroke-width="1"
          >
            <path
              d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"
            />
          </svg>
        </em>
      </router-link>
      <div class="container-header-left-wyden">Wyden</div>
    </div>

    <router-view />
  </div>
</template>



<script>
export default {
  name: "HomeView",

  computed: {
    termoUso() {
      return ["login.termouso"].includes(this.$route.name);
    },

    solicitacaoReserva() {
      return ["login.solicitacaoreserva"].includes(this.$route.name);
    },
  },
};
</script>

<style >
* {
  background: #111111;
  padding: 0;
  margin: 0;
}
.container-header-wyden {
  display: flex;
  align-items: center;
  background: #9146ff;
  height: 150px;
  width: 100%;
  font-size: 45px;
  font-weight: 700;
  color: #fff;
  justify-content: end;
  left: 5px;
}
.container-wyden {
  background: #9146ff;
  margin-right: 80px;
}
.container-header-left-arrow {
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  background: #9146ff;
}
.arrow-left {
  background: #9146ff;
  margin-left: 50px;
}
.container-header-left-wyden {
  background: #9146ff;
  font-size: 45px;
  font-weight: 700;
  color: #fff;
  width: 100%;
  display: flex;
  margin-left: 38%;
}
.container-header-reserve {
  background: #9146ff;
  width: 100%;
}
.header-logo {
  background: #9146ff;
  font-size: 45px;
  font-weight: 700;
  margin-left: 40%;
}
</style>


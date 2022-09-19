<template>
  <div>

    <div v-if="bemVindo || emailRecuperarSenha" class="container-header-wyden">
      <div class="container-header-left-wyden">Wyden</div>
    </div>

    <div v-if="solicitarReserva" class="container-request-reservation">
      <div v-if="solicitacaoReserva" class="container-header-reserve" >
        <div @click="mostrarMenu" class="container-icon-menu" >
          <svg viewBox="0 0 100 80" width="40" height="40" class="icon-menu">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>

        <menu-left v-if="mostrarMenuLeft" @fechar-menu-left="fecharMenuLeft"/>

        <div class="header-logo">Solicitação de Reserva</div>
        <div class="container-wyden">Wyden</div>
      </div>
    </div>

    <div v-if="termoUso" class="container-header-left-arrow">
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

    <div v-if="reservaComputador" class="container-computer-reservation">
      <router-link to="/solicitacao-reserva" class="arrow-left-reservation">
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

      <div class="container-reserve">
        <div class="header-logo-reservation">Reserva de Computador</div>
        <div class="container-location-reserve">
          <div v-for="(labs, index) in lab" :key="index" @click="mudarLab">
            <location-reserve :data="labs"/>
          </div>
        </div>
      </div>
    </div>

    <router-view />
  </div>
</template>


<script>
  import menuLeft from "@/components/menu-left/menu-left.vue"
  import locationReserve from "@/components/location-reserve"

  const laboratorioData = [
    {
      labLocalizacao: "Lab. 113-sub 1",
      active: true
    },
    {
      labLocalizacao: "Lab. 113-sub 2",
      active: false
    },
  ]

export default {
  name: "HomeView",

  components: {
    menuLeft,
    locationReserve
  },

  data() {
    return {
      mostrarMenuLeft: false,
      lab: [ ...laboratorioData],
    }
  },

  computed: {
    bemVindo() {
      return [
        "login.bemvindo",
        'login.cadastro',
        "login.emailrecuperarsenha",
        "login.recuperarsenha"
      ].includes(this.$route.name);
    },
    solicitarReserva(){
      return ['login.solicitacaoreserva'].includes(this.$route.name)
    },
    termoUso() {
      return ["login.termouso"].includes(this.$route.name);
    },
    solicitacaoReserva() {
      return ["login.solicitacaoreserva"].includes(this.$route.name);
    },
    reservaComputador(){
      return ["login.reservacomputador"].includes(this.$route.name)
    },
  },

  methods: {
    mostrarMenu(){
      this.mostrarMenuLeft = true
    },
    fecharMenuLeft(){
      this.mostrarMenuLeft = false
    },

    mudarLab(){
      return Object.values(this.lab).map((item) => {
        return {
          ativo: item.active,
        }
      })
    },
  }
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
  width: 100%;
  font-size: 45px;
  font-weight: 700;
  color: #fff;
  justify-content: end;
  left: 5px;
}
.container-wyden {
  background: #9146ff;
  color: #fff;
  font-size: 45px;
  font-weight: 700;
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
  align-items: center;
  height: 150px;
  margin-left: 38%;
}
.container-header-reserve {
  background: #9146ff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 150px;
}
.header-logo {
  background: #9146ff;
  font-size: 45px;
  font-weight: 700;
  color: #fff;
}
.container-icon-menu {
  background: #9146ff;
  cursor: pointer;
}
.icon-menu {
  fill: #fff;
  background: #9146ff;
}
.container-computer-reservation {
  background: #9146ff;
  font-size: 45px;
  font-weight: 700;
  color: #fff;
  height: 150px;
  display: flex;
  align-items: center;
}
.arrow-left-reservation {
  width: 10%;
  background: #9146ff;
}
.container-reserve {
  width: 80%;
  background: #9146ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.header-logo-reservation {
  background: #9146ff;
}
.container-location-reserve {
  display: flex;
  margin-top: 20px;
  gap: 50px;
  background: #9146ff;
}
</style>
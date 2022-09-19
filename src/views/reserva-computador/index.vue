<template>
  <div class="container">
    <div class="container-body">
      <div class="container-body-contents">
        <div class="container-contents">
          <span class="title">Click no computador para selecionar</span>
          <div class="board">Lousa</div>
        </div>

        <div class="container-abcd-computer">
          <div class="container-abcd">
            <span v-for="(abcd, index) in abcds" :key="index" class="abcd">{{ abcd }}</span>
          </div>

          <div class="container-computer">
            <div v-for="(computers, index) in computer" :key="index" class="computer-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
                <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="container-onetwotreefour">
          <span v-for="(oneTwoTreeFour, index) in oneTwoTreeFours"
            :key="index"
            class="onetwotreefour"
          >
            {{ oneTwoTreeFour }}
          </span>
        </div>

        <div @click="allLab" class="container-oval-input">
          <div class="oval-input" :class="[{'oval-input-true': active == true}]"/>
          <span class="reserve-all-lab">Reserve todo o laboratório</span>
        </div>
      </div>
    </div>

    <div class="container-footer">
      <div class="machine-free-selected">
        <div class="machine-free">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#fff" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"/>
          </svg>
          <span class="free">Livre</span>
        </div>

        <div class="machine-selected">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#9146ff" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"/>
          </svg>
          <span class="selected">Selecionado</span>
        </div>
      </div>

      <div class="machine-maintenance-unavailable">
        <div class="machine-unavailable">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#FBFF46" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"/>
          </svg>
          <span class="unavailable">Indisponível</span>
        </div>

        <div class="machine-maintenance">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#F12424" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"/>
          </svg>
          <span class="maintenance">Manutenção</span>
        </div>
      </div>
    </div>
    <button
      type="submit"
      class="btn w-25 mt-5 mb-4"
    >
      Reservar
    </button>
  </div>
</template>

<script>

  const aBcD = ['A', 'B', 'C', 'D']
  const oneTwoTreeFour = [' ','1', '2', '3', '4']
  const computers = [
    {computador: 1},{computador: 2}, {computador: 3}, {computador: 4}, {computador: 5}, {computador: 6}, {computador: 7}, {computador: 8}, {computador: 9}, {computador: 10}, {computador: 11}, {computador: 12}, {computador: 13}, {computador: 14}, {computador: 15}, {computador: 16}
  ]
export default {
  name: 'reserva-computador',

  data() {
    return {
      abcds: [ ...aBcD ],
      computer: [ ...computers ],
      oneTwoTreeFours: [ ...oneTwoTreeFour ],
      active: false
    }
  },

  methods: {
    allLab(){
      this.active = true
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;
}
.container-body {
  width: 500px;
  height: 380px;
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container-body-contents {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 30px;
  align-items: center;
}
.container-contents {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: center;
}
.title {
  font-weight: 700;
  font-size: 24px;
  color: #fff;
}
.board {
  background: #FFFAFA;
  display: flex;
  justify-content: center;
  font-weight: 500;
  border-radius: 4px;
  width: 100%;
}
.container-abcd-computer {
  display: flex;
  gap: 30px;
}
.container-abcd {
  display: flex;
  flex-direction: column;
  color: #fff;
  font-weight: 500;
  gap: 15px;
}
.abcd {
  font-size: 20px;
}
.container-computer {
  display: flex;
  flex-wrap: wrap;
  height: 25px;
}
.computer-icon {
  width: 90px;
  height: 47px;
  display: flex;
  justify-content: center;
}
.container-onetwotreefour {
  width: 100%;
  color: #fff;
  font-weight: 700;
  display: flex;
  gap: 82px;
}
.container-oval-input {
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
}
.oval-input {
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 50%;
}
.oval-input-true {
  background: #9146ff;
}
.reserve-all-lab {
  font-weight: 16px;
  font-weight: 500;
  color: #fff;
}
.container-footer {
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.machine-free-selected {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.machine-maintenance-unavailable {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.machine-free, .machine-maintenance, .machine-selected, .machine-unavailable {
  display: flex;
  gap: 10px;
}
.free, .selected, .maintenance, .unavailable {
  font-size: 20px;
  font-weight: 500;
  color: #fff;
}
.free {
  color: #fff;
}
.selected {
  color: #9146ff;
}
.maintenance {
  color: #F12424;
}
.unavailable {
  color: #FBFF46;
}
.btn {
  background: #9146ff;
  color: white;
  font-weight: 600;
}.btn:hover{
  background: #9146ff;
  color: #fff;
}
</style>

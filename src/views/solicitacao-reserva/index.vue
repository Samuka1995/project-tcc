<template>
    <div v-if="!loading" class="container">
    <h2>Reserve seu computador para:</h2>
    <!-- <div class="container-checkbox">
        <div
        class="form-check form-switch"
        style="background: #292929; width: 100%"
        >
        <input
            class="form-check-input"
            type="checkbox"
            style="width: 50px; height: 22px"
            role="switch"
            id="flexSwitchCheckChecked1"
            value="today"
        />
        <label
            class="form-check-label"
            style="
            font-size: 20px;
            font-weight: 600;
            left: 15px;
            background: #292929;
            "
            for="flexSwitchCheckChecked1"
            >Hoje</label
        >
        </div>
        <div
        class="form-check form-switch"
        style="background: #292929; width: 100%"
        >
        <input
            class="form-check-input"
            type="checkbox"
            style="width: 50px; height: 22px"
            role="switch"
            id="flexSwitchCheckChecked2"
            value="tomorrow"
        />
        <label
            class="form-check-label"
            style="
            font-size: 20px;
            font-weight: 600;
            left: 15px;
            background: #292929;
            "
            for="flexSwitchCheckChecked2"
            >Amanhã</label
        >
        </div>
        <div
        class="form-check form-switch"
        style="background: #292929; width: 100%"
        >
        <input
            class="form-check-input"
            type="checkbox"
            style="width: 50px; height: 22px"
            role="switch"
            id="flexSwitchCheckChecked3"
            value="plusDate"
        />
        <label
            class="form-check-label"
            style="
            font-size: 20px;
            font-weight: 600;
            left: 15px;
            z-index: 5;
            background: #292929;
            "
            for="flexSwitchCheckChecked3"
            >+ Data</label
        >
        </div>
    </div> -->

    <h3 style="background: #111111">Selecione o dia e horário</h3>

    <div style="background: #fff">
    <date-picker class="dp__theme_light" v-model="valorHora" style="fill: red"></date-picker>
    </div>

    <div>{{ valorHora }}</div>

    <button type="submit" class="btn w-25 mt-1">Selecione Horário</button>

    <button @click="reservaComputador" type="submit" class="btn w-25">Solicitar</button>


</div>
    <loading v-else />

</template>

<script>
    import DatePicker from '@/components/date-picker/date-picker.vue'
    import loading from '@/components/loading'

    export default {
        name: 'solicitacao-reserva',

        components: {
                DatePicker,
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
            reservaComputador() {
                this.$router.push({
                    name: "login.reservacomputador",
                });
            },
        },
    };
</script>

<style scoped>
    .header-logo {
        display: flex;
        align-items: center;
    }
    .container {
        background: #111111;
        color: #ffffff;
        justify-content: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 40px;
    }
    .container-checkbox {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        width: 500px;
        height: 200px;
        padding: 30px;
        background: rgb(255, 255, 255, 10%);
    }
    .form-check-input:checked {
        background-color: #bb86fc;
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
    .form-check-input {
        background-color: #979797;
        border: none;
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
    .date-picker {
        width: 200px;
        height: 200px;
    }
    h2 {
        margin: 50px 0 0 0;
        background: #111111;
    }
    h4 {
        background: red;
        color: #ffffff;
        width: 65px;
        height: 65px;
    }
</style>

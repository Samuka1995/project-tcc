<template>
    <div v-for="(datas, index) in data" :key="index" class="container-historic-reservations">
        <card-reserva :contents="datas" v-if="!loading" />

        <loading v-else />
    </div>
</template>

<script>
    import CardReserva from '@/components/card-reserva'
    import loading from '@/components/loading'

    const defaultDataContents = [
        {
            local_laboratory: 'Sub1 213',
            date: '22/10/2022',
            start_hour: '16:30',
            final_hour: '21:00'
        },
    ]

    export default {
        name: 'historico-reservas',

        components: {
            CardReserva,
            loading
        },

        data() {
            return {
                data: [ ...defaultDataContents ],
                loading: true
            }
        },

        mounted() {
            setTimeout(() => {
                this.loading = false
            }, 1500)
        },
    }
</script>

<style scoped>
.container-historic-reservations {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
}
</style>
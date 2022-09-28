<template>
    <div class="container-my-reserve">
        <div v-for="(datas, index) in data" :key="index" class="container-card">
            <card-reserva :contents="datas"/>
        </div>
        <button @click="openModalCancelReserve" class="button-calcel-reserve">Cancelar minha reserva</button>
    </div>
    <modal-cancel-reserve v-if="modalCancelReserve" @close-modal="closeModal" />
</template>

<script>
    import cardReserva from '@/components/card-reserva'
    import modalCancelReserve from '@/components/modal/modal-cancel-reserve'

    const defaultDataContents = [
        {
            local_laboratory: 'Sub1 213',
            date: '22/10/2022',
            start_hour: '16:30',
            final_hour: '21:00'
        },
    ]
    export default {
        name: 'minha-reserva',

        components: {
            cardReserva,
            modalCancelReserve
        },

        data() {
            return {
                data: [ ...defaultDataContents ],
                modalCancelReserve: false
            }
        },

        methods: {
            openModalCancelReserve() {
                this.modalCancelReserve = true
            },
            closeModal() {
                this.modalCancelReserve = false
            }
        },
    }
</script>

<style scoped>
.button-calcel-reserve {
    width: 25%;
    background: #9146FF;
    border-radius: 6px;
    color: #fff;
    font-weight: 500;
}
.container-my-reserve {
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
}
.container-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
}
</style>
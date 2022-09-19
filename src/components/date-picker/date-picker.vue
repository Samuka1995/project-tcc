<template>
    <Datepicker v-model="date" :dark="true" />
</template>

<script>
    import Datepicker from '@vuepic/vue-datepicker';
    // import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss';
    import '@vuepic/vue-datepicker/dist/main.css'

    export default {
        components: { Datepicker },

        props: {
            value: String
        },

        data() {
            return {
                date: null,
                dataHora: Date
            };
        },

        methods: {
            // Função para formatação de data.
            formatDate(date) {
                return (date.getDate() < 10 ? '0' : '') + date.getDate()
                + '/' +
                (date.getMonth() + 1)
                + '/' +
                date.getFullYear() + ' ' +
                date.getHours() + ':' + date.getMinutes();
            },
        },
    }
</script>
<template>
    <Datepicker v-model="date"
        :highlight="highlightedDates"
        :disabledDates="highlightedDates"
        :dark="true"
        highlightDisabledDays
        class="dp__theme_dark"
        utc
        locale="pt-BR"
        format="E"
    >
        <template #hours="{ value }">
            {{ value }}
        </template>
    </Datepicker>
</template>

<script>
    import Datepicker from "@vuepic/vue-datepicker";
    import "@vuepic/vue-datepicker/dist/main.css";
    import { ref } from 'vue';
    import addDays from 'date-fns/addDays';

    export default {
    components: { Datepicker },

        props: {

        },

        setup() {
                const date = ref(new Date());
                const highlightedDates = ref([
                    addDays(new Date(), 5),
                    addDays(new Date(), 6),
                ])

                return {
                    date,
                    highlightedDates,

                }
            }
    }
</script>


<style scoped>
  .dp__theme_dark {
    --dp-background-color: #212121;
    --dp-text-color: #ffffff;
    --dp-hover-color: #484848;
    --dp-hover-text-color: #ffffff;
    --dp-hover-icon-color: #959595;
    --dp-primary-color: #005cb2;
    --dp-primary-text-color: #ffffff;
    --dp-secondary-color: #a9a9a9;
    --dp-border-color: #2d2d2d;
    --dp-menu-border-color: #2d2d2d;
    --dp-border-color-hover: #aaaeb7;
    --dp-disabled-color: #737373;
    --dp-scroll-bar-background: #212121;
    --dp-scroll-bar-color: #484848;
    --dp-success-color: #00701a;
    --dp-success-color-disabled: #428f59;
    --dp-icon-color: #959595;
    --dp-danger-color: #e53935;
    --dp-highlight-color: rgba(0, 92, 178, 0.2);
  }
</style>
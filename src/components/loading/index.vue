<template>
    <div class="loading">
        <svg :width='h' :height='h' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring-alt">
            <rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect>
            <circle cx="50" cy="50" r="40" :stroke="bgColor" fill="none" :stroke-width="stroke" stroke-linecap="round"></circle>
            <circle cx="50" cy="50" r="40" :stroke="color" fill="none" :stroke-width="stroke" stroke-linecap="round">
            <animate attributeName="stroke-dashoffset" dur="1s" repeatCount="indefinite" from="0" to="-502"></animate>
            <animate attributeName="stroke-dasharray" dur="1.5s" repeatCount="indefinite" values="150.6 100.4;1 250;150.6 100.4"></animate>
            </circle>
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'component-loading',

        props: {
            /**
             * Tamanho do indicador
             */
			h: {
				type: Number,
				required: false,
				default: 100,
            },
            /**
             * Cor do background
             */
            bgColor: {
				type: String,
				required: false,
				default: '#e8e8e8',
            },
            /**
             * Cor do indicador
             */
            color: {
				type: String,
				required: false,
				default: '#9146ff',
            },
            /**
             * Expessura do indicador
             */
            stroke: {
				type: Number,
				required: false,
				default: 5,
            },
		},
    }
</script>

<style scoped>
    .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10% 0;
    }
</style>
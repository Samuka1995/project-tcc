<template>
    <div class="container">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style="background: #9146ff"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
        >
            <path
                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
            />
        </svg>

        <span :class="[{ 'active-lab-border-bottom': data.active == true }]"
            class="lab-location"
        >
            {{ data.labLocalizacao }}
        </span>
    </div>
</template>

<script>
    export default {
        name: "location-reserve",

        props: {
            data: {
                type: [Array, Object],
                required: true,
            },
        },

        data() {
            return {
                active: false,
            };
        },

        mounted() {
            console.log(this.data);
        },
    };
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #9146ff;
    cursor: pointer;
}
.lab-location {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background: #9146ff;
    border-bottom: none;
}
.active-lab-border-bottom {
    border-bottom: 1px solid #fff;
}
</style>
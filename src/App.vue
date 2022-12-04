<template>
    <router-view />
</template>

<script>
    import interceptors from "@/services/interceptor"


    export default {
        setup() {
            interceptors()
        }
    }
</script>



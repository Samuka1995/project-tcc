<template>
  <div>
    <h1 class="header-logo">Wyden</h1>
    <BemVindo
      style="background: #111111; border-radius: 10px 10px 0 0"
      msg="Bem vindo, faça o Login."
    />
  </div>
</template>

<script>
import BemVindo from "@/components/BemVindo.vue";

export default {
  name: "HomeView",
  components: {
    BemVindo,
  },
  data() {
    return {};
  },
};
</script>

<style>
.header-logo {
  position: absolute;
  color: white;
  margin: -5% 85%;
  z-index: 2;
}
</style>

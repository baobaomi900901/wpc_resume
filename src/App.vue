<template>
  <Menu />
  <router-view />
</template>

<script setup>
import Menu from "./components/Menu.vue";

</script>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  background: white;
}

.Menu {
  position: absolute;
  top: 0;
}
</style>

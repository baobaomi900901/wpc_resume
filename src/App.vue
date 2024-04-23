<template>
  <Menu ref="MenuDom" />
  <router-view />
</template>

<script setup>
import Menu from "./components/Menu.vue";
import useMainStore from "./store";
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const store = useMainStore();
console.log("init :>>", store.loading);

const MenuDom = ref();

onMounted(() => {});
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

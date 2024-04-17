<script setup>
import Menu from "./components/Menu.vue";
import useMainStore from "./store";
import { ref, onMounted } from "vue";
const store = useMainStore();
</script>

<template>
  <Menu />
  <router-view />
</template>

<style scoped>
</style>

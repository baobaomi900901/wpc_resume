<!--
* @description  参数1
* @fileName  home
* @author userName
* @date 2024-04-17 21:05:27
* @version V3.0.0
!-->
<template>
  <div id="home" class="home text-red-500">
    <h1>Home</h1>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
  console.log("home");
});
</script>
<style scoped>
</style>
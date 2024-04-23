<!--
* @description  参数1
* @fileName  Menu
* @author userName
* @date 2024-04-17 21:10:37
* @version V3.0.0
!-->
<template>
  <div id="Menu" class="Menu w-screen  flex justify-between items-center px-16 py-8">
    <div
      class="w-16 h-16 border-4 border-black flex justify-center items-center"
    >
      <span class="font-semibold text-2xl">W</span>
    </div>
    <div class=" text-2xl flex gap-8">
      <router-link to="/" :class="{ 'link-light': $route.name == 'Home' }">
        Home
      </router-link>
      <router-link
        to="/About"
        :class="{ 'link-light': $route.name == 'About' }"
      >
        About
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
</script>
<style scoped>
.link-light {
  color: yellowgreen;
}
</style>
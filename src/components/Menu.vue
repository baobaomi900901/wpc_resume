<!--
* @description  参数1
* @fileName  Menu
* @author userName
* @date 2024-04-17 21:10:37
* @version V3.0.0
!-->
<template>
  <div id="Menu" class="Menu">
    <router-link to="/" :class="{ 'link-light': $route.name == 'Home' }">
      Home
    </router-link>
    <router-link to="/About" :class="{ 'link-light': $route.name == 'About' }">
      About
    </router-link>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
</script>
<style scoped>
.link-light {
  color: #fff;
}
</style>
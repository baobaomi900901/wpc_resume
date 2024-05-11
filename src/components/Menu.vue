<!--
* @description  参数1
* @fileName  Menu
* @author userName
* @date 2024-04-17 21:10:37
* @version V3.0.0
!-->
<template>
  <div
    ref="Menu"
    id="Menu"
    class="Menu w-screen flex justify-between items-center px-16 py-8"
  >
    <div class="flex items-center gap-8">
      <div ref="container" class="container">
        <div class="box-wrapper">
          <div class="box-faces">
            <div class="box-face box-face1">
              <p>W</p>
            </div>
            <div class="box-face box-face2">
              <p>P</p>
            </div>
            <div class="box-face box-face4">
              <p>C</p>
            </div>
            <div class="box-face box-face3">
              <p>🍌</p>
            </div>
          </div>
          <!-- end of .box -->
        </div>
        <!-- end of .box-wrapper -->
      </div>
      <span class="font-medium text-base">UX/UE/UI Design</span>
    </div>
    <div class="text-2xl flex gap-8">
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
import { ref, reactive, onMounted, watch } from "vue";
import { gsap } from "gsap";
import useMainStore from "../store";

const store = useMainStore();
const Menu = ref();
// console.log("init Menu :>>", store.loading);
onMounted(() => {
  console.log("Home store.loading :>>", store.loading);
  const tl = gsap.timeline({
    defaults: { duration: 1, ease: "power2.inOut" },
  });
  tl.fromTo(
    Menu.value,
    { y: -100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
    }
  );
  watch(
    () => {
      return store.loading;
    },
    (newVal) => {
      console.log("newVal :>>", newVal);
      if (newVal == true) {
        tl.play();
        console.log("启动动画");
      }
    }
  );
});
</script>
<style scoped>
.link-light {
  color: yellowgreen;
}
.container {
  width: 4rem;
  height: 4rem;
  position: relative;
}

.box-wrapper {
  position: absolute;
  perspective: 300px;
  perspective-origin: 100% 32px;
}

.box-faces {
  width: 4rem;
  position: relative;
  transform-style: preserve-3d;
  transition: 1.5s transform cubic-bezier(.79,0,.54,.99);
}
.box-face {
  position: absolute;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.125rem solid black;
  background-color: #fff;
  color: black;
  font-weight: 600;
}

.box-face4 {
  transform: translateZ(-32px) rotateY(180deg);
}
.box-face2 {
  transform: rotateY(-270deg) translateX(32px);
  transform-origin: top right;
}
.box-face3 {
  transform: rotateY(270deg) translateX(-32px);
  transform-origin: center left;
  font-size: 1.5rem;
  background: #000;
}
.box-face1 {
  transform: translateZ(32px);
  background-color: black;
  color: white;
}

@keyframes spin {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(-360deg);
  }
}
.box-faces:hover {
  transform: rotateY(-270deg);
  transition: 2s transform cubic-bezier(.79,0,.54,.99);
}
</style>
<template>
  <div id="app" class="overflow-y-scroll no-scrollbar">
    <div class="loading flex justify-center items-center">
      <div
        ref="logo"
        class="logo w-12 h-12 border-2 text-white flex justify-center items-center"
      >
        <span ref="logoW">w</span>
      </div>
    </div>
    <Menu />
    <router-view />
  </div>
</template>

<script setup>
import Menu from "./components/Menu.vue";
import useMainStore from "./store";
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const store = useMainStore();

const logo = ref();
const logoW = ref();

console.log(logo);

onMounted(() => {
  // gsap.set(logoW.value, { y: 20, opacity: 1, delay: 0.5 });
  let tl = gsap.timeline();
  tl.set(logo.value, { y: 20, opacity: 0, delay: 0.5 }).to(
    logo.value,
    {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "none",
    }
  );
});
</script>

<style scoped>
.loading {
  width: 100vw;
  height: 100vh;
  background: #000;
  position: absolute;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
